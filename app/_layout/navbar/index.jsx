'use client';

import { NavbarBrand } from './brand';
import { NavbarList } from './list';

export function Navbar() {
  return (
    <nav className=' inset-x-0 top-0 z-10'>
      <div className='flex items-center justify-between text-background'>
        <NavbarBrand />
        <NavbarList />
      </div>
    </nav>
  );
}
