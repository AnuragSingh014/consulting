// components/Splashscreen.js
'use client'; // Required for animations and events

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import EventEmitter from 'events';
import { motion } from 'framer-motion';

const emitter = new EventEmitter();

export const SPLASHSCREEN_HIDE = 'SPLASHSCREEN_HIDE';

const Splashscreen = () => {
  const splashscreenRef = useRef(null);

  useEffect(() => {
    const splashscreen = splashscreenRef.current;

    const timeline = gsap.timeline({
      onComplete: () => {
        splashscreen.classList.add('hidden');
        emitter.emit(SPLASHSCREEN_HIDE); // Emit the hide event
      },
    });

    timeline
      .to(splashscreen, { opacity: 0, duration: 1, ease: 'power2.out' }, 0.9)
      .call(() => {
        emitter.emit(SPLASHSCREEN_HIDE);
      }, null, 0.9);

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <motion.div
    className="splashscreen fixed inset-0 bg-white z-50"
    initial={{ opacity: 1 }}
    animate={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 2, ease: 'easeOut' }} // Match with the timeout in Transition
  />
  );
};

export default Splashscreen;


