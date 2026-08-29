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

      {/* OUTER DIMENSIONAL GLOW */}
      <path
        d="
          M 0 8 L 54 20 L 96 11 L 141 28 L 189 14 L 243 26 L 300 13
          M 0 92 L 51 78 L 96 88 L 144 72 L 192 86 L 246 75 L 300 88
        "
        fill="none"
        stroke="#ff003c"
        strokeWidth="10"
        opacity="0.45"
        filter="url(#riftGlow)"
      />

      {/* THE ACTUAL RIFT (horizontal, taller) */}
      <path
        d="
          M 0 8 L 54 20 L 96 11 L 141 28 L 189 14 L 243 26 L 300 13
          L 300 88 L 246 75 L 192 86 L 144 72 L 96 88 L 51 78 L 0 92
          Z
        "
        fill="url(#riftVoid)"
      />

      {/* RED EDGE ON TOP */}
      <path
        d="M 0 8 L 54 20 L 96 11 L 141 28 L 189 14 L 243 26 L 300 13"
        fill="none"
        stroke="#ff003c"
        strokeWidth="2"
      />

      {/* RED EDGE ON BOTTOM */}
      <path
        d="M 0 92 L 51 78 L 96 88 L 144 72 L 192 86 L 246 75 L 300 88"
        fill="none"
        stroke="#ff003c"
        strokeWidth="2"
      />

      {/* ENERGY STREAKS */}
      <g stroke="#ff174f" strokeLinecap="round" opacity="0.8">
        <path d="M 20 10 L 8 -10" strokeWidth="1" />
        <path d="M 65 22 L 50 0" strokeWidth="0.7" />
        <path d="M 110 13 L 92 -15" strokeWidth="1.2" />
        <path d="M 160 27 L 148 3" strokeWidth="1" />
        <path d="M 205 15 L 220 -12" strokeWidth="0.8" />
        <path d="M 255 25 L 272 0" strokeWidth="1.3" />

        <path d="M 40 90 L 25 115" strokeWidth="0.8" />
        <path d="M 95 80 L 78 108" strokeWidth="1" />
        <path d="M 145 88 L 128 118" strokeWidth="0.6" />
        <path d="M 195 73 L 212 100" strokeWidth="0.8" />
        <path d="M 245 86 L 262 115" strokeWidth="1" />
      </g>

      {/* FLOATING DIMENSION FRAGMENTS */}
      <g fill="#ff003c">
        <rect x="28" y="5" width="3" height="2" transform="rotate(-25 28 5)" />
        <rect x="78" y="8" width="4" height="2" transform="rotate(20 78 8)" />
        <rect x="118" y="-2" width="2" height="4" transform="rotate(35 118 -2)" />
        <rect x="170" y="2" width="3" height="3" transform="rotate(-30 170 2)" />

        <rect x="55" y="95" width="3" height="2" transform="rotate(15 55 95)" />
        <rect x="130" y="100" width="4" height="2" transform="rotate(-18 130 100)" />
        <rect x="220" y="93" width="2" height="4" transform="rotate(28 220 93)" />

        <circle cx="185" cy="-4" r="1.2" />
        <circle cx="265" cy="98" r="1" />
      </g>
    </motion.svg>
  );
}