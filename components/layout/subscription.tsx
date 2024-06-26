
import Image from 'next/image';
import { FaCrown } from 'react-icons/fa';
import { GoDash } from 'react-icons/go';
import { PiCrownCrossFill, PiKeyholeFill } from 'react-icons/pi';
import { SiTicktick } from 'react-icons/si';

export const Subscription = () => {
  return (
    <div className='mb-3 mt-5 py-6'>
      <h2 className='stylefont mt-8 flex justify-center px-5 text-2xl font-semibold text-black'></h2>
      <h1 className='font1 flex justify-center px-4 text-4xl font-semibold text-[#660f0f]'>
        Subscription Plan
      </h1>
      <h2 className='stylefont flex justify-center pt-5 text-3xl font-bold text-[#0c0404]'>
        <div className='-ml-1 -mt-5 text-7xl'>
          <GoDash />
        </div>
        Choose a right plan for you
        <div className='-ml-1 -mt-5 text-7xl'>
          <GoDash />
        </div>
      </h2>
      <div className=' mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center px-4 md:px-10 lg:px-20'>
        
        <div className='flex flex-col md:flex-row h-auto w-full justify-between rounded-xl p-4 shadow-2xl'>
          <div className='flex flex-col'>
            <h2 className='my-2 py-2 flex gap-4 text-2xl md:text-3xl font-bold text-black'>
              <PiKeyholeFill className='text-[#640d14]' />
              Non Vegetarian Plan
            </h2>
            <h2 className='my-2 flex gap-3 text-base md:text-lg font-semibold text-black'>
              <SiTicktick className='rounded-xl text-xl text-[#640d14]' />
              26 days. Daily Lunch
            </h2>
            <h2 className='my-2 flex gap-3 text-base md:text-lg font-bold text-black'>
              <SiTicktick className='rounded-xl text-xl text-[#640d14]' />
              Rs 4150.0
            </h2>
            <div>
              <h2 className='my-2 text-base md:text-lg font-semibold text-black'>
                Annually: Save 15%
              </h2>
            </div>
            {/* <button className='mt-3 flex h-[50px] w-[230px] items-center justify-center rounded-xl border bg-[#640d14] p-2 px-4 text-xl font-bold text-white'> */}
              {/* Subscribe Now */}
            {/* </button> */}
          </div>
          <div className='flex items-center w-full md:w-auto mt-4 md:mt-0'>
            <img src={"/non-veg.jpg"} alt={'Non Vegetarian Plan'} className="h-[30vh] w-[80vw] md:w-[50vh] rounded-xl object-cover" />
          </div>
        </div>

        <div className='flex flex-col md:flex-row h-auto w-full justify-between rounded-xl p-4 shadow-2xl'>
          <div className='flex flex-col'>
            <h2 className='my-2 py-2 flex gap-4 text-2xl md:text-3xl font-bold text-black'>
              <PiKeyholeFill className='text-green-700' />
              Vegetarian Plan
            </h2>
            <h2 className='my-2 flex gap-3 text-base md:text-lg font-semibold text-black'>
              <SiTicktick className='rounded-xl text-xl text-green-700' />
              26 days. Daily Lunch
            </h2>
            <h2 className='my-2 flex gap-3 text-base md:text-lg font-bold text-black'>
              <SiTicktick className='rounded-xl text-xl text-green-700' />
              Rs 3900.0
            </h2>
            <div>
              <h2 className='my-2 text-base md:text-lg font-semibold text-black'>
                Annually: Save 15%
              </h2>
            </div>
            {/* <button className='mt-3 flex h-[50px] w-[230px] items-center justify-center rounded-xl border bg-green-700 p-2 px-4 text-xl font-bold text-white'> */}
              {/* Subscribe Now */}
            {/* </button> */}
          </div>
          <div className='flex items-center w-full md:w-auto mt-4 md:mt-0'>
            <img src={"/veg.jpg"} alt={'Vegetarian Plan'} className="h-[30vh] w-[80vw] md:w-[50vh] rounded-xl object-cover" />
          </div>
        </div>
        
      </div>
    </div>
  );
};

