'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { MagneticButton, ParallaxFade, ParallaxReveal } from '@/components';

import { Title, Wrapper } from './index.styled';

const phrase1 = 'Business challenges demand real solutions, not fluff.'
const phrase2 = 'We are the partner who rolls up their sleeves with you — not the one who hands over a  deck and leaves'
export function Description() {
  return (
    <article className='container relative'>
      <Wrapper>
        <div className='basis-full lg:basis-9/12'>
          <Title className=''>
            <ParallaxReveal paragraph={phrase1} />
          </Title>
          <Title className=''>
            <ParallaxReveal paragraph={phrase2} />
          </Title>
          <ParallaxFade>
            <Balancer as='p' className='mt-5 text-base lg:text-lg'>
            In today's world, speed and clarity win. We focus on actionable solutions that drive 
results 
            </Balancer>
          </ParallaxFade>
        </div>

        <motion.div
          whileInView={{ y: '-15%' }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
          }}
        >
          <div className='absolute right-0 top-3/4 lg:top-full lg:me-10'>
            <Link href='/about' passHref>
              <MagneticButton variant='ghost' size='xl'>
                <p className='text-2xl'>
                  About us
                </p>
              </MagneticButton>
            </Link>
          </div>
        </motion.div>
      </Wrapper>
    </article>
  );
}
