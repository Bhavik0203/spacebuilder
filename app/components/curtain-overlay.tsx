'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const CurtainOverlay = () => {
  const { scrollY } = useScroll();
  
  // Curtain animation values - extremely fast based on scroll distance
  const leftCurtainX = useTransform(scrollY, [0, 30, 80, 150, 400], [0, -500, -800, -800, -1200]);
  const rightCurtainX = useTransform(scrollY, [0, 30, 80, 150, 400], [0, 500, 800, 800, 1200]);
  const curtainOpacity = useTransform(scrollY, [0, 30, 80, 150, 400], [1, 0.6, 0.1, 0.02, 0]);

  return (
    <>
      {/* Left Curtain - Fixed position covering entire viewport */}
      <motion.div
        className="fixed left-0 top-0 w-6/7 h-screen"
        style={{
          x: leftCurtainX,
          opacity: curtainOpacity,
          zIndex: 99999
        }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/Untitled-1-01.png"
            alt="Paranjape Left Curtain"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        </div>
      </motion.div>

      {/* Right Curtain - Fixed position covering entire viewport */}
      <motion.div
        className="fixed right-0 top-0 w-6/7 h-screen"
        style={{
          x: rightCurtainX,
          opacity: curtainOpacity,
          zIndex: 99999
        }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/Untitled-1-02.png"
            alt="Paranjape Right Curtain"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent" />
        </div>
      </motion.div>
    </>
  );
};

export default CurtainOverlay;
