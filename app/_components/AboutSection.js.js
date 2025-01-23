import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Content */}
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <p className="text-3xl md:text-4xl font-normal leading-relaxed tracking-tight mb-12">
              I have a passion for creating user experiences that are seamless, meaningful and impactful.
            </p>
            <Link 
              href="/about"
              className="inline-block px-8 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition-colors duration-300"
            >
              About me
            </Link>
          </div>

          {/* Images */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Image 1 */}
            <div className="absolute top-0 left-0 w-[200px] h-[200px] md:w-[160px] md:h-[160px] sm:w-[120px] sm:h-[120px]">
              <Image
                src="/assets/img/abouts/about-1.jpg"
                alt="About image 1"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 120px, (max-width: 1200px) 160px, 200px"
              />
            </div>

            {/* Image 2 */}
            <div className="absolute top-32 right-0 w-[240px] h-[320px] md:w-[210px] md:h-[280px] sm:w-[150px] sm:h-[200px]">
              <Image
                src="/assets/img/abouts/about-2.png"
                alt="About image 2"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 150px, (max-width: 1200px) 210px, 240px"
              />
            </div>

            {/* Image 3 */}
            <div className="absolute bottom-0 left-32 w-[320px] h-[240px] md:w-[280px] md:h-[210px] sm:w-[176px] sm:h-[132px]">
              <Image
                src="/assets/img/abouts/about-3.jpg"
                alt="About image 3"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 176px, (max-width: 1200px) 280px, 320px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;