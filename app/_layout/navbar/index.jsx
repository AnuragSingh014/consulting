'use client';

import { NavbarBrand } from './brand';
import { NavbarList } from './list';

export function Navbar() {
  return (
    <nav className='absolute space-between inset-x-0 top-0 z-10'>
      {/* <div className='flex items-center justify-between text-background'> */}
      <div className='flex items-center w-full justify-between text-white p-3'>
        <NavbarBrand />
        <NavbarList />
      </div>
    </nav>
  );
}
