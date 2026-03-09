'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const CurtainOverlay = () => {
  const { scrollY } = useScroll();
  
  // Curtain animation values - extremely fast based on scroll distance
  const leftCurtainX = useTransform(scrollY, [0, 30, 80, 150, 400], [0, -600, -1000, -1200, -1500]);
  const rightCurtainX = useTransform(scrollY, [0, 30, 80, 150, 400], [0, 600, 1000, 1200, 1500]);
  const curtainOpacity = useTransform(scrollY, [0, 30, 80, 150, 400], [1, 0.6, 0.1, 0.02, 0]);

  return (
    <>
      {/* Left Curtain - Fixed position covering entire viewport */}
      <motion.div
        className="fixed left-0 top-0 w-11/12 h-screen"
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
           {/* Logo and Headline Overlay */}
          <div className="absolute inset-0 flex flex-col justify-between p-12">
            {/* Logo at top left */}
            <div className="text-white">
              <div className="relative w-32 h-12">
                <Image
                  src="/images/whitelogo.png"
                  alt="Space Builder"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            
            {/* Headline at center */}
            {/* <div className="text-white max-w-md flex flex-col justify-center items-start flex-1">
              <h2 className="text-2xl md:text-5xl font-serif text-white leading-tight text-left">
                Crafting  <br /> Landmarks
                <br />
                Creating  <br />exceptional
                <br />
                living spaces
              </h2>
            </div> */}
          </div>
         
        </div>
      </motion.div>

      {/* Right Curtain - Fixed position covering entire viewport */}
      <motion.div
        className="fixed right-0 top-0 w-11/12 h-screen"
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
