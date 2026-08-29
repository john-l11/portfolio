// lib/transition-context.tsx
'use client';

import { createContext, useContext, useState, useCallback, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

type TransitionContextType = {
  navigateWithTransition: (href: string) => void;
};

const TransitionContext = createContext<TransitionContextType | null>(null);

export function useTransitionNav() {
  const ctx = useContext(TransitionContext);
  if (!ctx) throw new Error('useTransitionNav must be used within TransitionProvider');
  return ctx;
}

const SWIPE_DURATION = 1.25; // seconds, total time for the full pass

type Axis = 'x' | 'y';

type SwipeDirectionConfig = {
  axis: Axis;
  keyframes: [string, string, string];
  gradientClass: string;
};

// Each entry: which axis moves, the enter->center->exit keyframes for that
// axis, and the gradient angle class that matches the direction of travel.
const SWIPE_DIRECTIONS: SwipeDirectionConfig[] = [
  { axis: 'x', keyframes: ['100%', '0%', '100%'], gradientClass: 'bg-linear-to-l' },  // right -> left
  { axis: 'x', keyframes: ['-100%', '0%', '-100%'], gradientClass: 'bg-linear-to-r' },  // left -> right
  { axis: 'y', keyframes: ['100%', '0%', '100%'], gradientClass: 'bg-linear-to-t' },  // bottom -> top
  { axis: 'y', keyframes: ['-100%', '0%', '-100%'], gradientClass: 'bg-linear-to-b' },  // top -> bottom
] as const;

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [swipe, setSwipe] = useState<{ key: number; dirIndex: number } | null>(null);
  const pendingHref = useRef<string | null>(null);

  const navigateWithTransition = useCallback(
    (href: string) => {
      if (href === pathname) return;

      const dirIndex = Math.floor(Math.random() * SWIPE_DIRECTIONS.length);
      pendingHref.current = href;
      setSwipe({ key: Date.now(), dirIndex });

      // Midpoint of the swipe (times: [0, 0.5, 1]) lands at exactly half
      // the total duration — that's when the panel fully covers the screen.
      setTimeout(() => {
        if (pendingHref.current) {
          router.push(pendingHref.current);
          pendingHref.current = null;
        }
      }, (SWIPE_DURATION / 2) * 1000);
    },
    [router, pathname]
  );

  const dir = swipe ? SWIPE_DIRECTIONS[swipe.dirIndex] : null;

  return (
    <TransitionContext.Provider value={{ navigateWithTransition }}>
      {children}
      {swipe !== null && dir !== null && (
        <motion.div
          key={swipe.key}
          className={`fixed inset-0 z-100 ${dir.gradientClass} from-blue-800/50 via-blue-500/70 to-cyan-100/90 from-0% via-30% to-90% pointer-events-none`}
          initial={{ [dir.axis]: dir.keyframes[0] }}
          animate={{ [dir.axis]: dir.keyframes }}
          transition={{
            duration: SWIPE_DURATION,
            times: [0, 0.5, 1],
            ease: ['easeIn', 'easeOut'],
          }}
          onAnimationComplete={() => setSwipe(null)}
        />
      )}
    </TransitionContext.Provider>
  );
}