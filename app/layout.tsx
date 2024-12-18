import type {Metadata} from 'next';
import localFont from 'next/font/local';
import './globals.css';
import {ReactNode} from 'react';
import Navbar from '@/components/ui/header/Navbar';
import DrawerSide from '@/components/ui/drawer-side/DrawerSide';
import Footer from '@/components/ui/Footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = ({children}: Readonly<{ children: ReactNode; }>) => {
  return (
    <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

    <div className="drawer">
      <input id="app-drawer" type="checkbox" className="drawer-toggle"/>
      <div className="drawer-content flex flex-col">

        <Navbar/>
        {children}
        <Footer/>

      </div>
      <DrawerSide/>
    </div>

    </body>
    </html>
  );
};

export default RootLayout;