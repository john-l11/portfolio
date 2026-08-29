'use client';

import { motion } from 'framer-motion';

export default function WaterBackdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Far layer: slow drift, darker, sits low */}
      <motion.svg
        className="absolute bottom-0 left-0 h-full w-[200%]"
        viewBox="0 0 2400 800"
        preserveAspectRatio="none"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
      >
        <defs>
          <linearGradient id="waterFar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0000fa" stopOpacity="0.5" />
            <stop offset="1" stopColor="#000000" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waterFar)"
          d="M0,420 C200,370 400,470 600,420 C800,370 1000,470 1200,420 C1400,370 1600,470 1800,420 C2000,370 2200,470 2400,420 L2400,800 L0,800 Z"
        />
      </motion.svg>

      {/* Near layer: faster, opposite direction, subtle red glow */}
      <motion.svg
        className="absolute bottom-0 left-0 h-full w-[200%]"
        viewBox="0 0 2400 800"
        preserveAspectRatio="none"
        animate={{ x: ['-50%', '0%'] }}
        transition={{ duration: 11, ease: 'linear', repeat: Infinity }}
      >
        <defs>
          <linearGradient id="waterNear" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0000f0" stopOpacity="0.14" />
            <stop offset="1" stopColor="#000000" stopOpacity="0.95" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waterNear)"
          d="M0,520 C300,450 500,590 800,520 C1100,450 1300,590 1600,520 C1900,450 2100,590 2400,520 L2400,800 L0,800 Z"
        />
      </motion.svg>
    </div>
  );
}