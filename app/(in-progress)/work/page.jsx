'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { Navbar } from '@/layout';
import { Header, Description, Thumbnail, Contact, WTransition } from '@/layout'; 

import { MagneticButton, ParallaxFade, ParallaxReveal } from '@/components'; 

// ... rest of your component code
// ProjectSlider Component
const ProjectSlider = ({ type, source }) => {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <img 
        src={source} 
        alt={type} 
        className="w-64 h-64 object-cover"
      />
    </div>
  );
};

// Main Combined Component
const Work= () => {
  const containerRef = useRef(null);
  const phrase = "Creating next level digital products";

  // Mock project options (replace with your actual data)
  const projectOptions = {
    first: [
      { type: 'web', source: '/screenshot.png' },
      { type: 'mobile', source: '/screenshot.png' },
      { type: 'design', source: '/screenshot.png' }
    ],
    second: [
      { type: 'app', source: '/screenshot.png' },
      { type: 'branding', source: '/screenshot.png' },
      { type: 'ui', source: '/screenshot.png' }
    ]
  };

  const firstSlider = projectOptions.first.map((item, index) => (
    <ProjectSlider key={`first-${index}`} {...item} />
  ));

  const secondSlider = projectOptions.second.map((item, index) => (
    <ProjectSlider key={`second-${index}`} {...item} />
  ));

  return (
    <WTransition>
      <Navbar />
      {/* <Header /> */}
      <main>
        {/* <Description /> */}
        <Thumbnail />
   
        {/* <AboutSection /> */}

      <div className="min-h-screen">
        {/* Work Section */}
        <article className="container relative py-16">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="basis-full lg:basis-9/12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <ParallaxReveal paragraph={phrase} />
              </h1>
            </div>
          </div>
        </article>

        {/* Project Section */}
        <section ref={containerRef} className="relative z-10 mt-14">
          <div className="grid items-center">
            <div className="bg-white">
              <motion.div
                className="mb-10 flex gap-10 overflow-hidden"
                initial={{ x: 0 }}
                animate={{ x: [-20, 0, -20] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ width: '120vw' }}
              >
                {firstSlider}
              </motion.div>
{/*               
              <motion.div
                className="mb-10 flex gap-10 overflow-hidden"
                initial={{ x: -20 }}
                animate={{ x: [0, -20, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ width: '120vw' }}
              >
                {secondSlider}
              </motion.div> */}
            </div>

            <motion.div
              className="w-screen bg-white"
              initial={{ height: 0 }}
              animate={{ height: 100 }}
              style={{ borderRadius: '0 0 50% 50%' }}
            />
          </div>
        </section>
      </div>
      </main>
      <Contact />
    </WTransition>
  );
};

export default Work;

