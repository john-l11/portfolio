'use client';

import { motion, AnimatePresence, Variants } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import DimensionalRift from './rift';

const menuItems = [
  { label: 'BACKSTORY', href: '/', desc: 'About me' },
  { label: 'JOURNEY', href: '/experience', desc: 'Experience and Skills' },
  { label: 'QUESTS', href: '/projects', desc: 'Projects' }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
  exit: { opacity: 0, transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

const itemVariants: Variants = {
  hidden: { x: -100, opacity: 0, rotate: -5 },
  visible: {
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 }
  },
  exit: { x: 100, opacity: 0, rotate: 5 },
};

export default function MetaphorMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-start overflow-hidden font-serif"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
        >
          {/* Rough grungy backdrop element */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--tw-gradient-stops))] from-red-900/40 via-black to-black pointer-events-none" />

          <div className="relative z-10 pl-16 md:pl-32 flex flex-col space-y-4 w-full max-w-2xl">
            <div className="text-red-600 text-xs tracking-widest uppercase mb-2 font-mono">-- Command Matrix --</div>

            {menuItems.map((item, idx) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
                onHoverStart={() => setHoveredItem(item.label)}
                onHoverEnd={() => setHoveredItem(null)}
                className="relative overflow-visible"
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group relative flex items-baseline space-x-6 py-2"
                >
                  <DimensionalRift isActive={hoveredItem === item.label} />
                  <span className="text-sm font-mono text-neutral-500 group-hover:text-red-500 transition-colors">
                    0{idx + 1}
                  </span>
                  <span className="relative z-10 text-4xl md:text-6xl font-black text-neutral-100 tracking-tighter group-hover:italic group-hover:text-red-500 transition-all duration-200">
                    {item.label}
                  </span>
                  <span className="relative z-10 hidden md:inline-block text-xs font-mono text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2">
                    // {item.desc}
                  </span>
                </Link>
              </motion.div>
            ))}

            <button
              onClick={onClose}
              className="mt-8 self-start px-6 py-2 bg-red-600 text-white font-mono text-xs tracking-widest hover:bg-neutral-100 hover:text-black transition-colors"
            >
              [CLOSE MENU]
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}