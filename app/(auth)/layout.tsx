import { Suspense, type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import coverImage from '#/public/images/food.jpg';

import { Loader } from '@/components/icons/loader';
// import { Logo } from '@/components/icons/logo';

const AuthLayout = ({ children }: { children: ReactNode }) => (
  <div className='container flex  w-[113vw] h-[100vh] md:h-[500px]   md:w-[1290px]  items-center  '>
    <div className='relative  h-full w-full'>
      <div className=' absolute inset-0 -z-10 h-full w-full  '>
        <Image
          src={'/log.jpg'}
          alt='background image'
          className='flex h-full w-full justify-center'
          width={1000}
          height={10}
        />
      </div>
      <div className=' flex justify-start  md:items-start '>
        <div className='right  ml-24 flex h- full md:h-[450px]  w-[300px] flex-col rounded-xl md:w-[370px] '>
          <Suspense fallback={<Loader className='mx-auto animate-spin' />}>
            {children}
          </Suspense>
        </div>
      </div>
    </div>
  </div>
);

export default AuthLayout;