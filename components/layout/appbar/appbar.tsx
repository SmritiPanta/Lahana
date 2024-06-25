import React, { useState, type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';


import { GiForkKnifeSpoon } from 'react-icons/gi';
import { MdArrowDropDown } from 'react-icons/md';


import { MobileNav } from './mobile-nav';

export const Appbar = async () => {
  
  
  return (
    <header className='sticky left-0 top-0 z-50 flex w-full items-center justify-between bg-[#ffff] p-4'>
      <div className='font1 flex gap-2 text-4xl font-semibold text-[#7e3939]'>
        <div className='font1 text-[#0F172B]'>
          <GiForkKnifeSpoon />
        </div>
        NEWA LAHANA
      </div>
      <div className='hidden items-center gap-8 font-semibold text-[#7e3939] md:flex'>
        <Link
          href='/'
          className='hover:text-gray-600'
        >
          HOME
        </Link>
        <Link
          href='#about-us'
          className='hover:text-gray-600'
        >
          ABOUT
        </Link>
        <Link
          href='#service-us'
          className='hover:text-gray-600'
        >
          SERVICE
        </Link>
        <Link
          href='#menu-us'
          className='hover:text-gray-600'
        >
          MENU
        </Link>
        <div>
          <Link
            href='/page'
            className='flex items-center hover:text-gray-600'
          >
            PAGE{' '}
            <MdArrowDropDown className='rotate-180 text-xl transition-all hover:rotate-0' />
          </Link>
        </div>
        <Link
          href='#contact-us'
          className='hover:text-gray-600'
        >
          CONTACT
        </Link>
        
          <Link
            href='/login'
            className='justify-center rounded-xl bg-[#662f2f] px-6 py-2 text-[#ffff] hover:bg-gray-500'
          >
            Login
          </Link>
        
      </div>
      <MobileNav />
    </header>
  );
};

