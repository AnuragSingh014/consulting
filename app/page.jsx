'use client';
import {
  Contact,
  Description,
  Header,
  Navbar,
  Project,
  Thumbnail,
  Transition,
} from '@/layout';

import AboutSection from './_components/AboutSection.js';
import Animation from './_components/Animation.jsx';
// import Laptop from './_components/model/index.jsx';

export default function Home() {
  return (
    
    <Transition>
    
      <Navbar />
      <Header />
      {/* <Laptop /> */}
      <main>
        <Description />
        <Thumbnail />
        <Project />
        {/* <AboutSection /> */}
      </main>
      <Animation />
      <Contact />
    </Transition>
  );
}
