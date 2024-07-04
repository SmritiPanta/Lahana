import React, { useState, type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';


import { GiForkKnifeSpoon } from 'react-icons/gi';
import { MdArrowDropDown } from 'react-icons/md';


import { MobileNav } from './mobile-nav';

export const Appbar = async () => {
  
  
  return (
    <header className=' left-0 top-0 z-50 flex w-full  justify-between bg-[#ffff] p-4'>
     
        
        <div className='  flex items-start '>
            <Image
              src={'/logon.png'}
              objectFit=''
              alt={'table'}
              width='190'
              height='1000'
              className='bg-mint text-mint fill-current  '
            ></Image>
          </div>
      
      <div className='hidden items-center gap-8 font-semibold text-lg text-black md:flex '>
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
        
          
        <Link
          href='#contact-us'
          className='hover:text-gray-600'
        >
          CONTACT
        </Link>
        
          <Link
            href=''
            className='justify-center rounded-xl bg-[#EE2916] px-6 py-2 text-[#ffff] hover:bg-gray-500'
          >
            Login
          </Link>
        
      </div>
      <MobileNav />
    </header>
  );
};

