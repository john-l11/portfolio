'use client';

import { motion, type Variants } from 'framer-motion';

const riftVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0, x: 60 },
  hover: {
    scaleX: [0, 1.05, 1],
    opacity: [0, 1, 0.95],
    x: [60, -8, 0],
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
};

export default function Triangle({ isActive }: { isActive: boolean }) {
  return (
    <motion.svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      viewBox="0 0 280 140"
      preserveAspectRatio="none"
      variants={riftVariants}
      initial="hidden"
      animate={isActive ? 'hover' : 'hidden'}
      style={{ transformOrigin: 'right center' }}
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

        {/*
          Built manually (not feDropShadow) so the shadow can grow in place:
          1. Offset the alpha mask to the fixed shadow position.
          2. feMorphology (dilate) fattens that silhouette outward — sharp
             edges preserved, unlike a blur — and its radius pulses.
          3. Flood pink, clip it to the dilated silhouette, then draw the
             white triangle on top.
        */}
        <filter id="pinkGlowFromBelow" x="-100%" y="-200%" width="300%" height="500%">
          <feOffset in="SourceAlpha" dx="5.6" dy="-9.3" result="offsetAlpha" />
          <feMorphology in="offsetAlpha" operator="dilate" radius="0.5" result="dilated">
            <animate attributeName="radius" values="0.5;3;0.5;0.5" keyTimes="0;0.08;0.17;1" dur="2.4s" repeatCount="indefinite" />
          </feMorphology>
          <feFlood floodColor="#ff2ec4" floodOpacity="0.75" result="pinkColor">
            <animate attributeName="flood-opacity" values="0.75;1;0.75;0.75" keyTimes="0;0.08;0.17;1" dur="2.4s" repeatCount="indefinite" />
          </feFlood>
          <feComposite in="pinkColor" in2="dilated" operator="in" result="coloredShadow" />
          <feMerge>
            <feMergeNode in="coloredShadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path d="M 15,70 L 260,40 L 260,100 Z" fill="#ffffff" filter="url(#pinkGlowFromBelow)" />
    </motion.svg>
  );
}