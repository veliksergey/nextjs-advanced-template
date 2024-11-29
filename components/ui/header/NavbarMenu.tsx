'use client';

import ThemeSwitcher from '@/components/ui/header/ThemeSwitcher';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import clsx from 'clsx';

const NavbarMenu = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="flex">
        <ul className="menu menu-horizontal">
          <li>
            <Link
              href="/"
              className={clsx(pathname === '/' && 'active')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={clsx({active: pathname.startsWith('/about')})}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
              About
            </Link>
          </li>
        </ul>

        <ThemeSwitcher/>
      </div>

    </>
  );
};

export default NavbarMenu;