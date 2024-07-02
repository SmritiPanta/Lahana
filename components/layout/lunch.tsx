import { GoDash } from "react-icons/go";

import { GoDotFill } from "react-icons/go";
import { FaBowlFood } from "react-icons/fa6";
import { AiFillForward } from "react-icons/ai";

export const Lunch = () => {
  return (
    <div id="menu-us" className="continer pt-8 ">
      <div className="text-center flex justify-center pt-10 items-center gap-2">
        <h2 className="text-[#660f0f] font-bold text-4xl  stylefont flex">
          {" "}
          <div className=" -mt-5 -ml-1 text-7xl">
            <GoDash />
          </div>
          Our Weekly Menu
          <div className=" -mt-5 -ml-1 text-7xl">
            <GoDash />
          </div>
        </h2>
      </div>
      <h2 className="flex justify-center font-semibold text-lg">
        Discover a variety of delicious and healthy meals curated for your
        enjoyment. Our menu rotates bi-weekly to keep your taste buds excited
        ans satisfied.
      </h2>
      <div className=" pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4  px-4 md:px-5 lg:px-10">
        <div className="flex flex-col md:flex-row h-auto  justify-between rounded-xl p-4  border border-x-4 border-y-2 border-[#ceb2b2] ">
          <div className="flex flex-col ">
            <h2 className="my-2 py-2  flex  items-center gap-4 text-2xl md:text-3xl font-bold text-black">
              <FaBowlFood className="text-[#640d14]" /> Menu for Week 1 & 3
            </h2>
            <h2 className="my-2 flex  gap-3 text-base md:text-lg font-semibold text-black items-center">
              <AiFillForward /> Sunday : Chicken Momo
            </h2>
            <h2 className="my-2 flex items-center gap-3 text-base md:text-lg font-semibold text-black">
              <AiFillForward />
              Monday: Veg Samyabaji
            </h2>
            <h2 className="my-2 flex items-center gap-3 text-base md:text-lg font-semibold text-black">
              <AiFillForward />
              Tuesday: Spaghett, Manchurian and Salad
            </h2>
            <h2 className="my-2 flex  items-center gap-3 text-base md:text-lg font-semibold text-black">
              <AiFillForward />
              Wednesday: Chiicken Biryani, Raita and Salad
            </h2>
            <h2 className="my-2 flex items-center gap-3 text-base md:text-lg font-semibold text-black">
              <AiFillForward />
              Thursday: Chicken Club Sandwich and Fries
            </h2>
            <h2 className="my-2 flex items-center gap-3 text-base md:text-lg font-semibold text-black">
              <AiFillForward />
              Friday: Chicken Chow Mein
            </h2>
          </div>
        </div>

        <div className="flex flex-col md:flex-row h-auto  justify-between rounded-xl p-4 border border-x-4 border-y-2 border-[#ceb2b2] ">
          <div className="flex flex-col">
            <h2 className="my-2 py-2 flex gap-4  items-center text-2xl md:text-3xl font-bold text-black">
              <FaBowlFood className="text-[#640d14]" /> Menu for Week 2 & 4
            </h2>
            <h2 className="my-2 flex gap-3 items-center text-base md:text-lg font-semibold text-black">
              <AiFillForward />
              Sunday : Chicken Samyabaji
            </h2>
            <h2 className="my-2 flex gap-3  items-center text-base md:text-lg font-semibold text-black">
              <AiFillForward />
              Monday: Chhola, Bhatura and Salad
            </h2>
            <h2 className="my-2 flex gap-3  items-center text-base md:text-lg font-semibold text-black">
              <AiFillForward />
              Tuesday: Pasta, Manchurian and Salad
            </h2>
            <h2 className="my-2 flex gap-3 items-center text-base md:text-lg font-semibold text-black">
              <AiFillForward />
              Wednesday: Chiicken Biryani, Raita and Salad
            </h2>
            <h2 className="my-2 flex gap-3  items-center text-base md:text-lg font-semibold text-black">
              <AiFillForward />
              Thursday: Noodles, Chicken Manchurian and Salad
            </h2>
            <h2 className="my-2 flex gap-3 items-center  text-base md:text-lg font-semibold text-black">
              <AiFillForward />
              Friday: Chicken Fried Rice and Salad
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
