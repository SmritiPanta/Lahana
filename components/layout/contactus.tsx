import Image from "next/image";
    import { GoDash } from 'react-icons/go';
    import { MdEmail } from "react-icons/md";
    import { FiPhoneCall } from "react-icons/fi";
    import { IoLocationSharp } from "react-icons/io5";
    export const Contactus = () => {
      return (
<section className=" container pt-10">
        <h1 className="text-4xl font-semibold text-[#7e3939] ml-16 px-10 font1">Contact Us</h1>
        <h1 className="text-2xl stylefont font-semibold flex pt-4 ml-10 text-black"> 
           
           Have a questions or need more information? We would love to hear from you!
           </h1>
           
        <div  className="flex flex-col md:flex-row ">
          
    
          <div className="flex flex-col items-center md:items-start  md:mt-0 w-full md:w-[50%] px-4 md:px-10 pt-5">
            <div className="w-full flex flex-col gap-3">
             
          <div className="flex flex-col pt-6">
          <MdEmail  className="ml-10 text-2xl text-[#7e3939]"/>
          <h1 className="px-10 pt-1 font-bold text-xl">Email</h1>
          <h1 className="px-10 pt-1 font-semibold">Monday - Friday :9am-5pm</h1>
          <h1 className="px-10 pt-1 font-semibold underline">lahanalunchbox@gmail.com</h1>
          </div>

          <div className="flex flex-col pt-6">
          <FiPhoneCall  className="ml-10 text-2xl text-[#7e3939]"/>
          <h1 className="px-10 pt-1 font-bold text-xl">Phone</h1>
          <h1 className="px-10 pt-1 font-semibold">9802365873</h1>
          <h1 className="px-10 pt-1 font-semibold ">Call/Text/Whatsapp</h1>
          </div>

          <div className="flex flex-col pt-6">
          <IoLocationSharp className="ml-10 text-3xl text-[#7e3939]"/>
          <h1 className="px-10 pt-1 font-bold text-xl">Location</h1>
          <h1 className="px-10 pt-1 font-semibold">Kamaladi</h1>
          <h1 className="px-10 pt-1 font-semibold ">Kathmandu</h1>
          </div>
              
            </div>
          </div>
          <div className="flex relative w-full md:w-[50%] h-[320px] md:h-[450px] mt-4 mr-24">
            <Image src={'/map.png'} objectFit="contain" alt={'table'} layout="fill" className="absolute bg-mint text-mint  "></Image>
          </div>
        </div>
        </section>
      )
    }