/*import Image from "next/image";
import { HiBookOpen } from "react-icons/hi";
import { GoDash } from "react-icons/go";

export const Review = () => {
  return (
    <section className="py-10 px-5">
      <div className="mt-10">
        <h2 className="text-[1.5rem] font-semibold text-black mt-8 px-5 font-serif flex justify-center stylefont">
          <div className="-mt-4 -ml-1 text-7xl">
            <GoDash />
          </div>
          Testimonial
          <div className="-mt-4 -ml-1 text-7xl">
            <GoDash />
          </div>
        </h2>
        <h1 className="text-4xl text-[#7e3939] px-4 flex justify-center font-bold font1">
          Our Clients Say!!!
        </h1>
        </div>
       <div className="flex flex-cols  lg:flex-cols-3 gap-10 ustify-items-center p-5">
      <div className="flex flex-col w-96  p-4">
        <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg drop-shadow-lg shadow-md md:flex-row md:space-x-1">
          <div className="flex-1 text-justify">
            <p className="text-xl font-semibold text-gray-800">
              The service was amazing. I never had to wait for my food.
            </p>
            <div className="mt-4 flex items-center space-x-2">
              <span className="font-semibold text-gray-800">Jane Doe</span>
              
            </div>
          </div>
          <div className="flex-shrink-0 left-20  mt-6 md:mt-0 relative w-32 h-32 md:w-40 md:h-40 drop-shadow-xl">
            <div className="absolute inset-0 md:mb-6 bg-gray-200 rounded-lg shadow-lg transform rotate-3" />
            <img src="/img1.jpg" alt="Jane Doe" className="w-full h-full rounded-lg object-cover relative z-10" />
          </div>
        </div>
      </div>

      <div className="flex flex-col w-96  p-4">
        <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-xl drop-shadow-lg md:flex-row md:space-x-1">
          <div className="flex-1 text-justify">
            <p className="text-xl font-semibold text-gray-800">
              The service was amazing. I never had to wait for my food.
            </p>
            <div className="mt-4 flex items-center space-x-2">
              <span className="font-semibold text-gray-800">Jane Doe</span>
              
            </div>
          </div>
          <div className="flex-shrink-0 left-20 mt-6 md:mt-0 relative w-32 h-32 md:w-40 md:h-40">
            <div className="absolute inset-0 bg-gray-200 rounded-lg shadow-lg transform rotate-3" />
            <img src="/img2.jpg" alt="Jane Doe" className="w-full h-full rounded-lg object-cover relative z-10" />
          </div>
        </div>
      </div>

      <div className="flex flex-col  w-96 p-4">
        <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md drop-shadow-lg md:flex-row md:space-x-1">
          <div className="flex-1 text-justify">
            <p className="text-xl font-semibold text-gray-800">
              The service was amazing. I never had to wait for my food.
            </p>
            <div className="mt-4 flex items-center space-x-2">
              <span className="font-semibold text-gray-800">Jane Doe</span>
              
            </div>
          </div>
          <div className="flex-shrink-0 left-20 mt-6 md:mt-0 relative w-32 h-32 md:w-40 md:h-40">
            <div className="absolute inset-0 bg-gray-200 rounded-lg shadow-lg transform rotate-3" />
            <img src="/img3.jpg" alt="Jane Doe" className="w-full h-full rounded-lg object-cover relative z-10" />
          </div>
        </div>
      </div>
      </div>
    </section>

  );
};*/
import { GoDash } from "react-icons/go";

export const Review = () => {
  return (
    <section className=" container py-10 px-5">
      <div className="mt-10">
        <h2 className="text-[1.5rem] font-semibold text-black mt-8 px-5 font-serif flex justify-center items-center">
          <div className="-mt-4 -ml-1 text-7xl">
            <GoDash />
          </div>
          Testimonial
          <div className="-mt-4 -ml-1 text-7xl">
            <GoDash />
          </div>
        </h2>
        <h1 className="text-4xl text-[#7e3939] px-4 flex justify-center font-bold">
          Our Clients Say!!!
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 justify-center items-center p-5">
        <div className="flex flex-col w-full lg:w-96 p-4">
          <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg">
            <div className="flex-1 text-justify">
              <p className="text-xl font-semibold text-gray-800">
                The service was amazing. I never had to wait for my food.
              </p>
              <div className="mt-4 flex items-center space-x-2">
                <span className="font-semibold text-gray-800">Jane Doe</span>
              </div>
            </div>
            <div className="flex-shrink-0 mt-6 relative w-32 h-32 md:w-40 md:h-40">
              <div className="absolute inset-0 bg-gray-200 rounded-lg shadow-lg transform rotate-3" />
              <img src="/img1.jpg" alt="Jane Doe" className="w-full h-full rounded-lg object-cover relative z-10" />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-96 p-4">
          <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg">
            <div className="flex-1 text-justify">
              <p className="text-xl font-semibold text-gray-800">
                The service was amazing. I never had to wait for my food.
              </p>
              <div className="mt-4 flex items-center space-x-2">
                <span className="font-semibold text-gray-800">Jane Doe</span>
              </div>
            </div>
            <div className="flex-shrink-0 mt-6 relative w-32 h-32 md:w-40 md:h-40">
              <div className="absolute inset-0 bg-gray-200 rounded-lg shadow-lg transform rotate-3" />
              <img src="/img2.jpg" alt="Jane Doe" className="w-full h-full rounded-lg object-cover relative z-10" />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-96 p-4">
          <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg">
            <div className="flex-1 text-justify">
              <p className="text-xl font-semibold text-gray-800">
                The service was amazing. I never had to wait for my food.
              </p>
              <div className="mt-4 flex items-center space-x-2">
                <span className="font-semibold text-gray-800">Jane Doe</span>
              </div>
            </div>
            <div className="flex-shrink-0 mt-6 relative w-32 h-32 md:w-40 md:h-40">
              <div className="absolute inset-0 bg-gray-200 rounded-lg shadow-lg transform rotate-3" />
              <img src="/img3.jpg" alt="Jane Doe" className="w-full h-full rounded-lg object-cover relative z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

