import { Navigation } from '@/features/Navigation';
import { Profile } from '@/features/Profile'
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { header } from './layout.css'

import '../styles/global.css';
import '../styles/normalize.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={header}>
          <Profile />
          <Navigation />
        </header>
        {children}
      </body>
    </html>
  );
}
