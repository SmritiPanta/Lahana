// import Image from "next/image";
// import { BsArrowRightCircle } from "react-icons/bs";

// export const Upper = () => {
//     return (
//         <section className="flex flex-col items-center justify-center h-[650px] overflow-x-hidden relative">
//             <div className="absolute inset-0 -z-10 w-full h-full">
//                 <Image
//                     src={'/wallpaper.jpg'}
//                     alt="background image"
//                     layout="fill"
//                     objectFit="cover"
//                     className="w-full h-full"
//                 />
//             </div>
//             <div className="flex h-full w-full flex-col justify-center gap-6 px-6 md:px-10">
//                 <h1 className="text-white text-3xl md:text-3xl font-bold max-w-[90%] sm:max-w-[300px] md:max-w-[500px] font1">
//                     Fresh, Delicious,and Eco-Friendly Lunches Delivered to Your Office
//                 </h1>
//                 <p className="text-white max-w-[90%] text-lg sm:max-w-[300px] md:max-w-[500px]">
//                     Elevate your lunch experience with Lahana Lunch Box. Healthy meals made with love and delivered with care.
//                 </p>

//                 <div className="max-w-[500px]">
//                     <button className="text-white flex gap-2 items-center px-10 py-2 border mt-3 rounded-xl bg-[#0F172B]">
//                         Get started Today <BsArrowRightCircle />
//                     </button>
//                 </div>
//             </div>
//         </section>
//     )
// }

import Image from "next/image";
import { BsArrowRightCircle } from "react-icons/bs";

export const Upper = () => {
  return (
    <section className="flex flex-col items-center justify-center h-[650px] overflow-x-hidden relative">
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image
          src={"/frontp.jpg"}
          alt="background image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="flex h-full w-full flex-col justify-center gap-6 px-6 md:px-10">
        <h1 className="text-black   text-3xl md:text-3xl font-bold max-w-[90%] sm:max-w-[300px] md:max-w-[500px] font1">
          Fresh, Delicious,and Eco-Friendly Lunches Delivered to Your Office
        </h1>
        <p className="text-black font2 max-w-[90%] text-lg sm:max-w-[300px] md:max-w-[500px]">
          Elevate your lunch experience with Lahana Lunch Box. Healthy meals
          made with love and delivered with care.
        </p>

        <div className="max-w-[600px] ">
          <button className="text-white font2 flex gap-2 items-center px-10 py-4 border mt-3 rounded-xl bg-[#EE2916]">
            Get started Today <BsArrowRightCircle />
          </button>
        </div>
      </div>
    </section>
  );
};
