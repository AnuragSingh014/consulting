

'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';

import { Navbar } from '@/layout';
import { Thumbnail, Contact } from '@/layout'; 

import { Ctransition } from '@/app/_layout/ctransition'; 
import { MagneticButton, ParallaxReveal } from '@/components'; 

// ... rest of your component code

const Work = () => {
  const containerRef = useRef(null);
  const phrase = "We'd love to hear from you!";

  return (
    <Ctransition>
      <Navbar className='bg-[#1c1d20] text-white' />
      <main className='bg-[#1c1d20] text-white'>
        {/* <Thumbnail /> */}

        {/* Contact Us Header Section */}
        <section className="min-h-screen flex flex-col justify-center items-center py-16 text-center">
          <div className="container relative">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              <ParallaxReveal paragraph={phrase} />
            </motion.h1>
            <p className="mt-6 text-lg text-gray-300">
              Whether you have a question, want to collaborate, or just say hello, we're here to help. Drop us a message below!
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section ref={containerRef} className="py-20">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6 text-white">Get In Touch</h2>
              <form className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-sm text-gray-400 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="bg-gray-700 text-white rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-sm text-gray-400 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="bg-gray-700 text-white rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-sm text-gray-400 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="bg-gray-700 text-white rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-500"
                    placeholder="Type your message here"
                  ></textarea>
                </div>
                <MagneticButton text="Send Message" />
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Contact />
    </Ctransition>
  );
};

export default Work;

