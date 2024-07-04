import Image from "next/image";
import Link from "next/link";
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
             
          <div className="flex flex-col pt-3">
          <MdEmail  className="ml-10 text-2xl text-[#7e3939]"/>
          <h1 className="px-10 pt-1 font-bold text-xl">Email</h1>
          <h1 className="px-10 pt-1 font-semibold">Monday - Friday :9am-5pm</h1>
          <Link href="mailto:lahanalunchbox@gmail.com" className="px-10 pt-1 font-semibold underline">
                lahanalunchbox@gmail.com
              </Link>
          
          </div>

          <div className="flex flex-col pt-3">
          <FiPhoneCall  className="ml-10 text-2xl text-[#7e3939]"/>
          <h1 className="px-10 pt-1 font-bold text-xl">Phone</h1>
          <Link href="tel:9802365873" className="px-10 pt-1 font-semibold">
                9802365873
              </Link>
          <h1 className="px-10 pt-1 font-semibold ">Call/Text/Whatsapp</h1>
          </div>

          <div className="flex flex-col pt-3">
          <IoLocationSharp className="ml-10 text-3xl text-[#7e3939]"/>
          <h1 className="px-10 pt-1 font-bold text-xl">Location</h1>
          <h1 className="px-10 pt-1 font-semibold">Kamaladi</h1>
          <h1 className="px-10 pt-1 font-semibold ">Kathmandu</h1>
          </div>
              
            </div>
          </div>
          {/* <div className="flex relative w-full md:w-[50%] h-[320px] md:h-[450px] mt-4 mr-24"> */}
            {/* <Image src={'/map.png'} objectFit="contain" alt={'table'} layout="fill" className="absolute bg-mint text-mint  "></Image> */}
          {/* </div> */}
          <div className="mb-5 pt-3"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.241857245103!2d85.31672892425418!3d27.709817875384672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1906c7d8ba87%3A0xeb2649ae59dcda2e!2sKamaladi%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1720066090246!5m2!1sen!2snp" width="600" height="430"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
        </div>
        </section>
      )
    }