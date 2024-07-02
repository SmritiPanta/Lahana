// import Image from "next/image";
// import { BsArrowRightCircle } from "react-icons/bs";
// import { FaFacebookSquare } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";

// export const Follow = () => {
//     return (
//         <section className="flex flex-col items-center justify-center h-[450px] overflow-x-hidden relative">
//             <div className="absolute inset-0 -z-10 w-500 ">
//                 <Image
//                     src={'/follow.jpg'}
//                     alt="background image"
//                     layout="fill"
//                     objectFit="fill"
//                     className="w-full h-full"
//                 />
//             </div>
//             <div className="flex h-full w-full flex-col justify-center gap-6 px-6 md:px-10">
//                 <h1 className="text-black text-5xl md:text-3xl font-bold max-w-[90%] sm:max-w-[300px] md:max-w-[500px] font1">
//                     FOLLOW US ON SOCIAL MEDIA
//                 </h1>
//                 <h1 className="text-2xl stylefont font-semibold flex  text-black">Stay updated with our lates news, menus,and promotions.</h1>
//                 <div className="flex gap-10 pt-12">
//                     <div className="flex flex-col">
//                     <FaFacebookSquare  className="text-5xl ml-16 text-[#18365e]"/>
//                     <h1>facebook.com/lahanalunchbox</h1>

//                     </div>

//                     <div className="flex flex-col">
//                     <FaInstagramSquare className="text-5xl ml-16 text-[#d33939]"/>
//                     <h1>instagram.com/lahanalunchbox</h1>

//                     </div>

//                     <div className="flex flex-col">
//                     <FaLinkedin  className="text-5xl ml-16 text-[#0A66C2]"/>
//                     <h1>linkedin.com/company/lahanalunchbox</h1>

//                     </div>

//                 </div>

//             </div>
//         </section>
//     )
// }
import Image from "next/image";
import { BsArrowRightCircle } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Follow = () => {
  return (
    <section className="flex flex-col items-center justify-center h-[450px] overflow-x-hidden relative">
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image
          src={"/follow.jpg"}
          alt="background image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="flex h-full w-full flex-col justify-center gap-6 px-6 md:px-10 items-center text-center md:text-left">
        <h1 className="text-black text-3xl pt-10 md:text-3xl font-bold max-w-[90%] sm:max-w-[300px] md:max-w-[500px] font1">
          FOLLOW US ON SOCIAL MEDIA
        </h1>
        <h1 className="text-2xl stylefont font-semibold text-black">
          Stay updated with our latest news, menus, and promotions.
        </h1>
        <div className="flex flex-col md:flex-row gap-10 pt-12 items-center md:items-start">
          <div className="flex flex-col items-center md:items-start">
            <FaFacebookSquare className="text-5xl text-[#18365e]" />
            <h1 className="text-center md:text-left">
              facebook.com/lahanalunchbox
            </h1>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <FaInstagramSquare className="text-5xl text-[#d33939]" />
            <h1 className="text-center md:text-left">
              instagram.com/lahanalunchbox
            </h1>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <FaLinkedin className="text-5xl text-[#0A66C2]" />
            <h1 className="text-center md:text-left">
              linkedin.com/company/lahanalunchbox
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};
