/*import Image from "next/image";
export const Contact = () => {
  return (
    <div id='contact-us' className="flex  flex-col md:justify-evenly md:flex-row p-4  ">
      <div className="flex relative  px-10 w-[500px] md:w-[500px] h-[300px]  md:h-[450px] mt-4 ">
        <Image src={'/map.png'} objectFit="contain" alt={'table'} width="600"
          height="1000"
          className=" absolute bg-mint text-mint fill-current border w-full h-full   border-gray-200 "></Image>
      </div>

      <div className="flex flex-col items-center md:items-start mt-8 md:mt-0   ">
        <div className="right  w-[500px] md:w-[500px] h-[450px]  flex flex-col  gap-3    " >
        <h1 className="text-2xl stylefont font-semibold text-black  ">Reach Out. We are Here to Help.</h1>
          <h1 className="text-4xl font-semibold text-[#7e3939] font1">Contact Us</h1>
          <input type="text" placeholder="Full Name" className="w-full border-2 px-5 py-2  border-gray-400 font-semibold text-gray-500 "></input>
          <input type="text" placeholder="Phone Number" className="w-full border-2   px-5 py-2 mt-2 border-gray-400 font-semibold text-gray-500 "></input>
          <input type="text" placeholder="Email" className="w-full border-2   px-5 py-2 mt-2 border-gray-400 font-semibold text-gray-500"></input>
          <input type="text" placeholder="Message" className="  border-2 mt-2  px-5 py-10 border-gray-400 font-semibold text-gray-500 "></input>
          <button className=" text-[#ffff] flex gap-2 items-center p-2 px-4 border w-[120px] h-[50px] mt-3 bg-[#0F172B] "> Send Now </button>
        </div>

      </div>
      
    </div>
) }*/
    import Image from "next/image";
    import { GoDash } from 'react-icons/go';
    export const Contact = () => {
      return (
        <div id='contact-us' className="flex flex-col md:flex-row pt-10">
          <div className="flex relative w-full md:w-[50%] h-[300px] md:h-[450px] mt-4">
            <Image src={'/map.png'} objectFit="contain" alt={'table'} layout="fill" className="absolute bg-mint text-mint  "></Image>
          </div>
    
          <div className="flex flex-col items-center md:items-start mt-8 md:mt-0 w-full md:w-[50%] px-4 md:px-10 pt-10">
            <div className="w-full flex flex-col gap-3">
              <h1 className="text-2xl stylefont font-semibold flex text-black"> <div className=' -ml-1 -mt-5 text-7xl'>
            <GoDash />{' '}
          </div>{' '}Reach Out. We are Here to Help. <div className=' -ml-1 -mt-5 text-7xl'>
            <GoDash />{' '}
          </div>{' '}</h1>
              <h1 className="text-4xl font-semibold text-[#7e3939] font1">Contact Us</h1>
              <input type="text" placeholder="Full Name" className="w-full border-2 px-5 py-2 border-gray-400 font-semibold text-gray-500 rounded-lg"></input>
              <input type="text" placeholder="Phone Number" className="w-full border-2 px-5 py-2 mt-2 border-gray-400 font-semibold text-gray-500 rounded-lg"></input>
              <input type="text" placeholder="Email" className="w-full border-2 px-5 py-2 mt-2 border-gray-400 font-semibold text-gray-500 rounded-lg"></input>
              <input type="text" placeholder="Message" className="w-full border-2 px-5 py-10 mt-2 border-gray-400 font-semibold text-gray-500 rounded-lg"></input>
              {/* <button className="text-white flex gap-2 items-center p-2 px-4 border w-[120px] h-[50px] mt-3 bg-[#0F172B]">Send Now</button> */}
            </div>
          </div>
        </div>
      )
    }
    




