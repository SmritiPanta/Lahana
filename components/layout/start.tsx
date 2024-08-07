import Image from "next/image";
    import { GoDash } from 'react-icons/go';
    export const Start = () => {
      return (
        <section className="container">
             <h2 className=' stylefont mt-8 flex justify-center px-5 pb-5 font-serif text-4xl font-semibold text-[#EE2916]'>
          {' '}
          <div className=' -ml-1 -mt-5 text-7xl'>
            <GoDash />{' '}
          </div>{' '}
          Get Started
          <div className=' -ml-1 -mt-5 text-7xl'>
            <GoDash />{' '}
          </div>{' '}
        </h2>
        <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  overflow-hidden mb-5 px-4 md:px-10 ">
            
        <div className="p-4 text-center bg-[#fff998] rounded-xl flex flex-col items-center">
            <div className="text-5xl text-[#4e2424] mb-2"></div>
            <h2 className="font-semibold my-2 text-black text-2xl font1">Choose Your Plan</h2>
            <p className="px-4 md:px-10 text-black text-xl text-center font2 ">Select a plan that fits your needs daily, weekly,or monthly.</p>
        </div>
        <div className="p-4 text-center bg-[#fff998]  rounded-xl flex flex-col items-center">
            <div className="text-5xl text-[#4e2424] mb-2"></div>
            <h2 className="font-semibold my-2 text-black text-2xl font1">Customize Your Menu</h2>
            <p className="px-4 md:px-10 text-black text-xl font2 text-center">Pick your meas from our rotating menu.</p>
        </div>
        <div className="p-4 text-center bg-[#fff998]  rounded-xl flex flex-col items-center">
            <div className="text-5xl text-[#4e2424] mb-2"></div>
            <h2 className="font-semibold my-2 text-black text-2xl font1">Delivery to Your Office</h2>
            <p className="px-4 md:px-10 text-black text-xl font2 text-center">We deliver your lunch fresh straight to your office.</p>
        </div>
        <div className="p-4 text-center bg-[#fff998]  rounded-xl flex flex-col items-center">
            <div className="text-5xl text-[#4e2424] mb-2"></div>
            <h2 className="font-semibold my-2 text-black text-2xl font1">Enjoy</h2>
            <p className="px-4 md:px-10 text-black text-xl font2 text-center">Savor a delicious, nutritous meal without any hassle.</p>
        </div>
    </div>
    </section>
      )
    }