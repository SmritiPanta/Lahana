/*'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export const MobileNav () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='flex items-center md:hidden'>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className='text-[#7e3939]'
      >
        <svg
          className='h-6 w-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
          ></path>
        </svg>
      </button>
    </div>
  );
  {
    menuOpen && (
      <div className='absolute left-0 top-full flex w-full flex-col items-center bg-[#ffff] py-4 md:hidden'>
        <Link
          href='/'
          className='py-2 hover:text-gray-600'
          onClick={() => setMenuOpen(false)}
        >
          HOME
        </Link>
        <Link
          href='#about-us'
          className='py-2 hover:text-gray-600'
          onClick={() => setMenuOpen(false)}
        >
          ABOUT
        </Link>
        <Link
          href='#service-us'
          className='py-2 hover:text-gray-600'
          onClick={() => setMenuOpen(false)}
        >
          SERVICE
        </Link>
        <Link
          href='#menu-us'
          className='py-2 hover:text-gray-600'
          onClick={() => setMenuOpen(false)}
        >
          MENU
        </Link>
        <Link
          href='/page'
          className='py-2 hover:text-gray-600'
          onClick={() => setMenuOpen(false)}
        >
          PAGE
        </Link>
        <Link
          href='#contact-us'
          className='py-2 hover:text-gray-600'
          onClick={() => setMenuOpen(false)}
        >
          CONTACT
        </Link>
        <Link
          href='/login'
          className='mt-2 justify-center rounded-xl bg-[#0F172B] px-6 py-2 text-[#ffff] hover:bg-gray-500'
          onClick={() => setMenuOpen(false)}
        >
          Login
        </Link>
      </div>
    );
  }
}

'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='flex items-center md:hidden'>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className='text-[#7e3939]'
      >
        <svg
          className='h-6 w-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
          ></path>
        </svg>
      </button>
      
      {menuOpen && (
        <div className='absolute left-0 top-full flex w-full flex-col items-center bg-[#ffff] py-4 md:hidden'>
          <Link href='/' passHref>
            <a className='py-2 hover:text-gray-600' onClick={() => setMenuOpen(false)}>
              HOME
            </a>
          </Link>
          <Link href='#about-us' passHref>
            <a className='py-2 hover:text-gray-600' onClick={() => setMenuOpen(false)}>
              ABOUT
            </a>
          </Link>
          <Link href='#service-us' passHref>
            <a className='py-2 hover:text-gray-600' onClick={() => setMenuOpen(false)}>
              SERVICE
            </a>
          </Link>
          <Link href='#menu-us' passHref>
            <a className='py-2 hover:text-gray-600' onClick={() => setMenuOpen(false)}>
              MENU
            </a>
          </Link>
          <Link href='/page' passHref>
            <a className='py-2 hover:text-gray-600' onClick={() => setMenuOpen(false)}>
              PAGE
            </a>
          </Link>
          <Link href='#contact-us' passHref>
            <a className='py-2 hover:text-gray-600' onClick={() => setMenuOpen(false)}>
              CONTACT
            </a>
          </Link>
          <Link href='/login' passHref>
            <a className='mt-2 justify-center rounded-xl bg-[#0F172B] px-6 py-2 text-[#ffff] hover:bg-gray-500' onClick={() => setMenuOpen(false)}>
              Login
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};
*/
'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='flex items-center md:hidden'>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className='text-[#7e3939]'
      >
        <svg
          className='h-6 w-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
          ></path>
        </svg>
      </button>
      
      {menuOpen && (
        <div className='absolute left-0 top-full flex w-full flex-col items-center bg-[#ffff] py-4 md:hidden'>
          <div onClick={() => { setMenuOpen(false); window.location.href = '/'; }} className='py-2 hover:text-gray-600'>
            HOME
          </div>
          <div onClick={() => { setMenuOpen(false); window.location.href = '/#about-us'; }} className='py-2 hover:text-gray-600'>
            ABOUT
          </div>
          <div onClick={() => { setMenuOpen(false); window.location.href = '/#service-us'; }} className='py-2 hover:text-gray-600'>
            SERVICE
          </div>
          <div onClick={() => { setMenuOpen(false); window.location.href = '/#menu-us'; }} className='py-2 hover:text-gray-600'>
            MENU
          </div>
          <div onClick={() => { setMenuOpen(false); window.location.href = '/page'; }} className='py-2 hover:text-gray-600'>
            PAGE
          </div>
          <div onClick={() => { setMenuOpen(false); window.location.href = '/#contact-us'; }} className='py-2 hover:text-gray-600'>
            CONTACT
          </div>
          <div onClick={() => { setMenuOpen(false); window.location.href = '/login'; }} className='mt-2 justify-center rounded-xl bg-[#0F172B] px-6 py-2 text-[#ffff] hover:bg-gray-500'>
            Login
          </div>
        </div>
      )}
    </div>
  );
};
