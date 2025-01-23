'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';

import { Navbar } from '@/layout'; // Order imports as specified in your linting rules
import { Thumbnail, Contact } from '@/layout'; // Order imports as specified in your linting rules 

import { Atransition } from '@/app/_layout/atransition'; 
import { ParallaxReveal } from '@/components'; 

// ... rest of your component code
const Work = () => {
  const technologies = [
    { name: 'Framer Motion', description: 'For smooth animations', logo: '/framer.png' },
    { name: 'React', description: 'Component-based UI', logo: '/react.png' },
    { name: 'Next.js', description: 'Server-side rendering and routing', logo: '/nextjs.png' },
    { name: 'Tailwind CSS', description: 'Utility-first styling', logo: '/tailwind.png' },
  ];

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }),
  };

  const phrase = "About Us: Passion for Creating Digital Experiences";

  return (
    <Atransition>
      <Navbar />
      <main>
        {/* <Thumbnail /> */}

        {/* About Section */}
        <section className="min-h-screen py-16">
          <article className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <ParallaxReveal paragraph={phrase} />
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                We are a team of creative developers and designers committed to building next-level
                digital experiences. From smooth animations to responsive designs, we bring your
                ideas to life with cutting-edge technologies.
              </p>
            </motion.div>
          </article>
        </section>

        {/* Technologies Section */}
        <section className="bg-gray-100 py-20">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-3xl md:text-4xl font-bold mb-10"
            >
              Technologies We Use
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={animationVariants}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6"
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-20 h-20 object-contain mb-4"
                  />
                  <h3 className="text-lg font-bold">{tech.name}</h3>
                  <p className="text-sm text-gray-500 mt-2">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Animated Highlight Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Why Choose Us?
              </h2>
              <p className="text-lg text-gray-700">
                We combine creativity and technical expertise to deliver
                high-quality, user-centric designs and solutions tailored to
                your needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />
      </main>
    </Atransition>
  );
};

export default Work;
