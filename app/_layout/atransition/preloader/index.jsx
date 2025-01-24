'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import { Dot } from 'lucide-react';

import { Center } from '@/components';
import { aboutWords } from '@/data';
import { useDimensions, useTimeOut } from '@/hooks';

import { fade, slideUp } from './variants';

const MotionComponent = motion(Center);

export function Preloader() {
  const [index, setIndex] = useState(0);
  const { width, height } = useDimensions();

  useTimeOut({
    callback: () => {
      setIndex(prevIndex => prevIndex + 1);
    },
    duration: index === 0 ? 200 : 150,
    deps: [index],
  });

  const initialPath = `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${
    height + 300
  } 0 ${height}  L0 0`;
  const targetPath = `M0 0 L${width} 0 L${width} ${height} Q${
    width / 2
  } ${height} 0 ${height}  L0 0`;

  /** @type {import('framer-motion').Variants} */
  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.2, ease: [0.50, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.2, ease: [0.50, 0, 0.24, 1], delay: 0.2 },
    },
  };

  return (
    <MotionComponent
      className='fixed z-50 h-screen w-screen cursor-wait bg-gray-900'
      variants={slideUp}
      initial='initial'
      exit='exit'
    >
      {width > 0 ? (
        <>
          <MotionComponent
            className='text-4xl font-extrabold  text-white md:text-3xl tracking-tighter'
            variants={fade}
            initial='initial'
            animate='enter'
          >

            <p className='text-6xl'>{aboutWords[index]}</p>
          </MotionComponent>
          <motion.svg className='absolute top-0 -z-10 h-[calc(100%+300px)] w-full'>
            <motion.path
              className=''
              variants={curve}
              initial='initial'
              exit='exit'
            />
          </motion.svg>
        </>
      ) : null}
    </MotionComponent>
  );
}
