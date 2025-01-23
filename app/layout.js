import { rootMetadata } from '@/config';
import { neue_montreal } from '@/fonts';
import { Offcanvas } from '@/layout';
import { Providers } from '@/providers';
import Splashscreen from './_components/Splashscreen'; // Import the Splashscreen component
import Cursor from './cursor';
import './globals.css';

/** @type {import('next').Metadata} */
export const metadata = rootMetadata;

/** @param {import('react').PropsWithChildren<unknown>} */
export default function RootLayout({ children }) {
  const isDesktop = typeof window !== 'undefined' && window.innerWidth > 767;

  return (
    <html lang="en" dir="ltr" className={neue_montreal.variable}>
      <body className={neue_montreal.className}>
        <Providers>
          {/* <Splashscreen /> Add the Splashscreen component here */}
          <Cursor /> {/* Cursor component */}
          <Offcanvas />
          {children}
        </Providers>
      </body>
    </html>
  );
}
