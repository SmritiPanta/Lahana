/*import { FaLocationDot } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { GoDash } from "react-icons/go";
export const Footer =()=> {
    return( 
        <section className="h-[350px] w-[400] bg-[#0F172B] mt-10 grid grid-cols-3">
            
      <div className="h-[50vh] w-[40vh] py-10 mt-10 text-start px-10" >

       <h1 className="text-4xl font-semibold text-[white] py-3 stylefont flex"> Company <div className=" -mt-5 -ml-1 text-7xl"><GoDash /></div> </h1>
       <h3 className=" font-semibold text-[white] py-1 "> About Us</h3>
       <h3 className="  text-[white] py-1">Contact Us</h3>
       <h3 className=" font-semibold py-1 text-[white]  "> Reservation</h3>
       <h3 className="  text-[white] py-1">Privacy Policy</h3>
       
       <h3 className=" font-semibold text-[white] "> Terms & Condition </h3>
           </div>
           
           <div className="h-[50vh] w-[60vh] py-10 mt-10 text-start px-10" >

       <h1 className="text-4xl font-semibold text-[white] py-3 stylefont flex"> Contact <div className=" -mt-5 -ml-1 text-7xl"><GoDash /></div> </h1>
       <h3 className=" font-semibold text-[white] py-1 flex  text-center gap-2"> <FaLocationDot />Thamel-8 Kathmandu</h3>
       <h3 className="  text-[white] py-1 flex gap-3"> <IoCall />+977 980000000</h3>
       <h3 className=" font-semibold py-1 text-[white] flex gap-3 "> <IoMail />mail@domain.com</h3>
       <div className="flex font-bold py-1  text-2xl text-[white] gap-4"><FaFacebook /> <FaYoutube /> <FaLinkedin /> <FaInstagramSquare /></div>
       
       
       
           </div>
           <div className="h-[50vh] w-[60vh] py-10 mt-10 text-start px-10" >

<h1 className="text-4xl font-semibold text-[white] py-3 stylefont flex"> Openings <div className=" -mt-5 -ml-1 text-7xl"><GoDash /></div></h1>
<h3 className=" font-semibold text-[white] py-1 text-xl "> Monday - Saturday</h3>
<h3 className="  text-[white] py-1">09AM - 09PM</h3>
<h3 className=" font-semibold py-1 text-[white] text-xl "> Sunday</h3>
<h3 className="  text-[white] py-1">10AM - 08PM</h3>

<h3 className=" font-semibold text-[white] "> Terms & Condition </h3>
    </div>

        <hr></hr>   
           
      
        </section>
    )
}*/
import { FaLocationDot, FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoCall, IoMail } from "react-icons/io5";
import { GoDash } from "react-icons/go";

export const Footer = () => {
    return (
        <section className="bg-[#0F172B] mt-10 p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-start">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white py-3 stylefont flex items-center">
                    Company 
                    <div className="-mt-2 -ml-1 text-5xl lg:text-7xl">
                        <GoDash />
                    </div>
                </h1>
                <h3 className="font-semibold text-white py-1">About Us</h3>
                <h3 className="text-white py-1">Contact Us</h3>
                <h3 className="font-semibold py-1 text-white">Reservation</h3>
                <h3 className="text-white py-1">Privacy Policy</h3>
                <h3 className="font-semibold text-white py-1">Terms & Condition</h3>
            </div>
            <div className="text-start">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white py-3 stylefont flex items-center">
                    Contact 
                    <div className="-mt-2 -ml-1 text-5xl lg:text-7xl">
                        <GoDash />
                    </div>
                </h1>
                <h3 className="font-semibold text-white py-1 flex items-center gap-2">
                    <FaLocationDot />
                    Kamaladi Kathmandu
                </h3>
                <h3 className="text-white py-1 flex items-center gap-3">
                    <IoCall />
                    +977 9802365873
                </h3>
                <h3 className="font-semibold py-1 text-white flex items-center gap-3">
                    <IoMail />
                    lahanalunchbox@gmail.com
                </h3>
                <div className="flex font-bold py-1 text-2xl text-white gap-4">
                    <FaFacebook />
                    <FaYoutube />
                    <FaLinkedin />
                    <FaInstagramSquare />
                </div>
            </div>
            <div className="text-start">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white py-3 stylefont flex items-center">
                    Openings 
                    <div className="-mt-2 -ml-1 text-5xl lg:text-7xl">
                        <GoDash />
                    </div>
                </h1>
                <h3 className="font-semibold text-white py-1 text-xl">Monday - Saturday</h3>
                <h3 className="text-white py-1">09AM - 09PM</h3>
                <h3 className="font-semibold py-1 text-white text-xl">Sunday</h3>
                <h3 className="text-white py-1">10AM - 08PM</h3>
            </div>
        </section>
    );
};
