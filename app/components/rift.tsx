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
          M 0 35 L 54 43 L 96 37 L 141 48 L 189 39 L 243 47 L 300 38
          M 0 65 L 51 55 L 96 62 L 144 51 L 192 61 L 246 53 L 300 62
        "
        fill="none"
        stroke="#ff003c"
        strokeWidth="10"
        opacity="0.45"
        filter="url(#riftGlow)"
      />

      {/* THE ACTUAL RIFT (horizontal) */}
      <path
        d="
          M 0 35 L 54 43 L 96 37 L 141 48 L 189 39 L 243 47 L 300 38
          L 300 62 L 246 53 L 192 61 L 144 51 L 96 62 L 51 55 L 0 65
          Z
        "
        fill="url(#riftVoid)"
      />

      {/* RED EDGE ON TOP */}
      <path
        d="M 0 35 L 54 43 L 96 37 L 141 48 L 189 39 L 243 47 L 300 38"
        fill="none"
        stroke="#ff003c"
        strokeWidth="2"
      />

      {/* RED EDGE ON BOTTOM */}
      <path
        d="M 0 65 L 51 55 L 96 62 L 144 51 L 192 61 L 246 53 L 300 62"
        fill="none"
        stroke="#ff003c"
        strokeWidth="2"
      />

      {/* ENERGY STREAKS */}
      <g stroke="#ff174f" strokeLinecap="round" opacity="0.8">
        <path d="M 20 32 L 8 12" strokeWidth="1" />
        <path d="M 65 40 L 50 18" strokeWidth="0.7" />
        <path d="M 110 34 L 92 8" strokeWidth="1.2" />
        <path d="M 160 41 L 148 15" strokeWidth="1" />
        <path d="M 205 38 L 220 10" strokeWidth="0.8" />
        <path d="M 255 41 L 272 15" strokeWidth="1.3" />

        <path d="M 40 60 L 25 90" strokeWidth="0.8" />
        <path d="M 95 63 L 78 95" strokeWidth="1" />
        <path d="M 145 55 L 128 88" strokeWidth="0.6" />
        <path d="M 195 60 L 212 92" strokeWidth="0.8" />
        <path d="M 245 55 L 262 88" strokeWidth="1" />
      </g>

      {/* FLOATING DIMENSION FRAGMENTS */}
      <g fill="#ff003c">
        <rect x="28" y="27" width="3" height="2" transform="rotate(-25 28 27)" />
        <rect x="78" y="30" width="4" height="2" transform="rotate(20 78 30)" />
        <rect x="118" y="20" width="2" height="4" transform="rotate(35 118 20)" />
        <rect x="170" y="24" width="3" height="3" transform="rotate(-30 170 24)" />

        <rect x="55" y="72" width="3" height="2" transform="rotate(15 55 72)" />
        <rect x="130" y="78" width="4" height="2" transform="rotate(-18 130 78)" />
        <rect x="220" y="70" width="2" height="4" transform="rotate(28 220 70)" />

        <circle cx="185" cy="22" r="1.2" />
        <circle cx="265" cy="75" r="1" />
      </g>
    </motion.svg>
  );
}