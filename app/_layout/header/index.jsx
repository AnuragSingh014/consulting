'use client';

import { motion } from 'framer-motion';
import { MoveDownRight } from 'lucide-react';
// import { img } from 'next-cloudinary';

import { ParallaxSlider } from '@/components';

import { slideUp } from './variants';

export function Header() {
  return (
   
    <motion.header
      className=' bg-secondary-foreground text-background'
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
  
    
    <div class="relative bg-[#999d9f] text-white bg-cover bg-center bg-no-repeat flex h-[100vh] flex-col justify-end gap-2 md:flex-col-reverse md:justify-normal">
        <div className='select-none'>
          <h1 className='text-[max(9em,15vw)]'>
            <ParallaxSlider repeat={4} baseVelocity={2}>
              <span className='pe-12 text-[12rem]'>
                Influidity <span className='text-[#00b9bb]'>Solution</span>
              <span className='spacer'>—</span>
              </span>
            </ParallaxSlider>
          </h1>
        </div>

        <div className='md:ml-auto'>
          <div className='mx-10 max-md:my-12 md:mx-36'>
            {/* <div className='mb-4 md:mb-20'>
              <MoveDownRight size={28} strokeWidth={1.25} />
            </div> */}

            <h4 className='text-[clamp(1.55em,2.5vw,2.75em)]'>
              <span className='block'>We Solve Problems</span>
              <span className='block'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- You Scale Faster</span>
            </h4>
          </div>
        </div>
      </div>
    </motion.header>
    
  );
}



