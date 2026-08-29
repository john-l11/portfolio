'use client';

import { motion, type Variants } from 'framer-motion';

const riftVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  hover: {
    scaleX: [0, 1.1, 1],
    opacity: [0, 1, 0.95],
    x: [0, -1, 1, 0],
    y: [0, 1, -1, 0],
    transition: {
      duration: 0.25,
      ease: 'easeOut',
      x: {
        repeat: Infinity,
        duration: 0.15,
      },
      y: {
        repeat: Infinity,
        duration: 0.12,
      },
    },
  },
};

export default function DimensionalRift({ isActive }: { isActive: boolean }) {
  return (
    <motion.svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      viewBox="0 0 300 100"
      preserveAspectRatio="none"
      variants={riftVariants}
      initial="hidden"
      animate={isActive ? 'hover' : 'hidden'}
      style={{ transformOrigin: 'center' }}
    >
      <defs>
        <filter id="riftGlow" x="-50%" y="-100%" width="200%" height="300%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="
              1 0 0 0 0
              0 0.05 0 0 0
              0 0 0.15 0 0
              0 0 0 1 0
            "
          />
        </filter>

        <linearGradient id="riftVoid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#120006" />
          <stop offset="0.5" stopColor="#000000" />
          <stop offset="1" stopColor="#120006" />
        </linearGradient>

        <linearGradient id="riftEnergy" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#40000d" />
          <stop offset="0.45" stopColor="#ff003c" />
          <stop offset="0.55" stopColor="#ff174f" />
          <stop offset="1" stopColor="#40000d" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}