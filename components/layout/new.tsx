

import { GiForkKnifeSpoon } from "react-icons/gi";
import { PiTrolleyFill } from "react-icons/pi";
import { IoPeopleSharp } from "react-icons/io5";
import { RiCustomerServiceFill } from "react-icons/ri";
import { GoDash } from 'react-icons/go';

export const New = () => {
    return (
        <section className="pt-16 mt-5">
            <h1 className='font1 mt-1  text-center sm:text-left flex justify-center sm:flex-row items-center  px-4 text-4xl font-semibold text-black'> 
          Welcome to{' '}
          <div className='font1 sm:-mt-5 px-3 py-3 text-5xl text-[#7e3939]'>
            <GiForkKnifeSpoon />
          </div>{' '}
           Lahana LunchBox
        </h1>

        <h1 className='mt-3 flex justify-center px-5 text-[1.2rem]'>
          {' '}
           At Lahana LunchBox, we believe that a nutritious and tasty lunch can make your workday brighter and more productive. Our mission is to deliver fresh, delicious, and eco-friendly lunches right to your office doorstep. Say goodbye to boring meals and helli to culinary adventure everyday!
        </h1>
        <h2 className=' stylefont mt-8 flex justify-center px-5 font-serif text-3xl font-semibold text-[#7e3939]'>
          {' '}
          <div className=' -ml-1 -mt-5 text-7xl'>
            <GoDash />{' '}
          </div>{' '}
          Our Values
          <div className=' -ml-1 -mt-5 text-7xl'>
            <GoDash />{' '}
          </div>{' '}
        </h2>

        <div id='service-us' className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  overflow-hidden mb-5 px-4 md:px-10 ">
            
            <div className="p-4 text-center bg-white  rounded-xl flex flex-col items-center">
                <div className="text-5xl text-[#4e2424] mb-2"><GiForkKnifeSpoon /></div>
                <h2 className="font-semibold my-2 text-black text-3xl font1">Quality Food</h2>
                <p className="px-4 md:px-10 text-black text-xl text-center">We use only the freshest ingredients to prepare our meals.</p>
            </div>
            <div className="p-4 text-center bg-white  rounded-xl flex flex-col items-center">
                <div className="text-5xl text-[#4e2424] mb-2"><PiTrolleyFill /></div>
                <h2 className="font-semibold my-2 text-black text-3xl font1">Sustainability</h2>
                <p className="px-4 md:px-10 text-black text-xl text-center">We prioritize eco-friendly packaging and sustainable practices.</p>
            </div>
            <div className="p-4 text-center bg-white  rounded-xl flex flex-col items-center">
                <div className="text-5xl text-[#4e2424] mb-2"><RiCustomerServiceFill /></div>
                <h2 className="font-semibold my-2 text-black text-3xl font1">Convenience</h2>
                <p className="px-4 md:px-10 text-black text-xl text-center">We deliver straight to your office for maxmimum convenience.</p>
            </div>
        </div>
        </section>
    );
}


