// import { GiForkKnifeSpoon } from "react-icons/gi";
// import { PiTrolleyFill } from "react-icons/pi";
// import { IoPeopleSharp } from "react-icons/io5";
// import { RiCustomerServiceFill } from "react-icons/ri";
// import { GoDash } from 'react-icons/go';

// import { IoCheckmarkDoneCircle } from "react-icons/io5";

// export const New = () => {
//     return (
//         <section className=" container pt-16 mt-5">
//             <div className='font1 mt-1  text-center sm:text-left flex justify-center sm:flex-row items-center  px-6 text-4xl
//             font-semibold text-black'>
//           Welcome to Lahana LunchBox
//         </div>

//         <h1 className='mt-3 flex justify-center px-5 text-[1.2rem]'>
//           {' '}
//            At Lahana LunchBox, we believe that a nutritious and tasty lunch can make your workday brighter and more productive. Our mission is to deliver fresh, delicious, and eco-friendly lunches right to your office doorstep. Say goodbye to boring meals and helli to culinary adventure everyday!
//         </h1>
//         <h2 className=' stylefont mt-8 flex justify-center px-5 font-serif text-3xl font-semibold text-[#7e3939]'>
//           {' '}
//           <div className=' -ml-1 -mt-5 text-7xl'>
//             <GoDash />{' '}
//           </div>{' '}
//           Our Values
//           <div className=' -ml-1 -mt-5 text-7xl'>
//             <GoDash />{' '}
//           </div>{' '}
//         </h2>

//         <div id='service-us' className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  overflow-hidden mb-5 px-4 md:px-10 ">

//             <div className="p-4 text-center bg-white  rounded-xl flex flex-col items-center">
//                 <div className="text-5xl text-[#4e2424] mb-2"><GiForkKnifeSpoon /></div>
//                 <h2 className="font-semibold my-2 text-black text-3xl font1">Quality Food</h2>
//                 <p className="px-4 md:px-10 text-black text-xl text-center">We use only the freshest ingredients to prepare our meals.</p>
//             </div>
//             <div className="p-4 text-center bg-white  rounded-xl flex flex-col items-center">
//                 <div className="text-5xl text-[#4e2424] mb-2"><PiTrolleyFill /></div>
//                 <h2 className="font-semibold my-2 text-black text-3xl font1">Sustainability</h2>
//                 <p className="px-4 md:px-10 text-black text-xl text-center">We prioritize eco-friendly packaging and sustainable practices.</p>
//             </div>
//             <div className="p-4 text-center bg-white  rounded-xl flex flex-col items-center">
//                 <div className="text-5xl text-[#4e2424] mb-2"><IoCheckmarkDoneCircle /></div>
//                 <h2 className="font-semibold my-2 text-black text-3xl font1">Convenience</h2>
//                 <p className="px-4 md:px-10 text-black text-xl text-center">We deliver straight to your office for maxmimum convenience.</p>
//             </div>
//         </div>
//         </section>
//     );
// }
import { GiForkKnifeSpoon } from "react-icons/gi";
import { PiTrolleyFill } from "react-icons/pi";

import { GoDash } from "react-icons/go";

import { IoCheckmarkDoneCircle } from "react-icons/io5";

export const New = () => {
  return (
    <section id="service-us" className=" container pt-16 ">
      <div
        className="font1 pt-1  text-center sm:text-left flex justify-center sm:flex-row items-center  px-6 text-4xl 
            font-semibold text-black"
      >
        Welcome to Lahana LunchBox
      </div>

      <h1 className="pt-3 flex justify-center font2 px-5 text-[1.2rem]">
        {" "}
        At Lahana LunchBox, we believe that a nutritious and tasty lunch can
        make your workday brighter and more productive. Our mission is to
        deliver fresh, delicious, and eco-friendly lunches right to your office
        doorstep. Say goodbye to boring meals and helli to culinary adventure
        everyday!
      </h1>
      <h2 className=" stylefont mt-8 flex justify-center px-5 font-serif text-3xl font-semibold text-[#EE2916]">
        {" "}
        <div className=" -ml-1 -mt-5 text-7xl">
          <GoDash />{" "}
        </div>{" "}
        Our Values
        <div className=" -ml-1 -mt-5 text-7xl">
          <GoDash />{" "}
        </div>{" "}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  overflow-hidden mb-5 px-4 md:px-10 ">
        <div className="p-4 text-center bg-[#fff998]  rounded-xl flex flex-col items-center">
          <div className="text-5xl text-[#EE2916] mb-2">
            <GiForkKnifeSpoon />
          </div>
          <h2 className="font-semibold my-2  text-black text-3xl font1">
            Quality Food
          </h2>
          <p className="px-4 md:px-10 font2 text-black text-xl text-center">
            We use only the freshest ingredients to prepare our meals.
          </p>
        </div>
        <div className="p-4 text-center bg-[#fff998]  rounded-xl flex flex-col items-center">
          <div className="text-5xl text-[#EE2916] mb-2">
            <PiTrolleyFill />
          </div>
          <h2 className="font-semibold my-2 text-black text-3xl font1">
            Sustainability
          </h2>
          <p className="px-4 md:px-10 text-black text-xl font2 text-center">
            We prioritize eco-friendly packaging and sustainable practices.
          </p>
        </div>
        <div className="p-4 text-center bg-[#fff998]  rounded-xl flex flex-col items-center">
          <div className="text-5xl text-[#EE2916] mb-2">
            <IoCheckmarkDoneCircle />
          </div>
          <h2 className="font-semibold my-2 text-black text-3xl font1">
            Convenience
          </h2>
          <p className="px-4 md:px-10 text-black  font2 text-xl text-center">
            We deliver straight to your office for maxmimum convenience.
          </p>
        </div>
      </div>
    </section>
  );
};
