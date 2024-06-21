import Image from "next/image";
import { HiBookOpen } from "react-icons/hi";
import { GoDash } from "react-icons/go";

export const Review = () => {
    return (
        <section className="">

            <div className="mt-10  ">
                <h2 className=" text-[1.5rem] font-semibold text-black mt-8 px-5 font-serif flex justify-center stylefont"> <div className=" -mt-4 -ml-1 text-7xl"><GoDash /> </div>Testimonial <div className=" -mt-4 -ml-1 text-7xl"><GoDash /> </div></h2>
                <h1 className="text-4xl  text-[#7e3939] px-4 flex justify-center font-bold font1">Our Clients Say!!!</h1>
                <div className="grid grid-cols-3 gap-4 ml-7 mt-10 justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className=" p-4   w-[50vh] h-[40vh] shadow-xl rounded-xl flex flex-col justify-center ">
                        <div className="text-5xl text-[#7e3939] -mt-6 flex justify-center"><HiBookOpen /> </div>
                        <h2 className=" my-2 text-gray-600 text-xl"> Diam elitr kasd sed at Diam elitr kasd sedelitr kasd sed atsed ipsum elitr sed ipsum  elitr sed ipsum</h2>
                        <div className="flex"><Image src={'/img1.jpg'} objectFit="contain" alt={'table'} width="260"
                            height="1000"
                            className="bg-mint text-mint h-[10vh] w-[10vh] rounded-full  "></Image>
                            <h2 className=" my-2 text-[#0F172B] font-serif font-semibold text-xl mt-5 ml-5 font1"> Julie Russal   </h2>

                        </div>
                    </div>
                    <div className=" p-4  text-center w-[50vh] h-[40vh] shadow-xl rounded-xl flex flex-col justify-center">
                        <div className="text-5xl text-[#7e3939] -mt-6 flex justify-center"><HiBookOpen /></div>
                        <h2 className=" my-2 text-gray-600 text-xl"> Diam elitr kasd sed at elitr sed at elitr sed iat elitr sed iipsum justo dolor sed clita amet diam</h2>
                        <div className="flex"><Image src={'/img2.jpg'} objectFit="contain" alt={'table'} width="260"
                            height="1000"
                            className="bg-mint text-mint h-[10vh] w-[10vh] rounded-full "></Image>
                            <h2 className=" my-2 text-[#0F172B] font-serif font-semibold text-xl mt-5 ml-5 font1"> Julie Russal   </h2>

                        </div>



                    </div>
                    <div className=" p-4  text-center w-[50vh] h-[40vh]   shadow-xl rounded-xl flex flex-col justify-center">
                        <div className="text-5xl text-[#7e3939] -mt-6 flex justify-center"><HiBookOpen /> </div>
                        <h2 className="my-2 text-gray-600 text-xl"> Diam justo dolor sed clita kasd sed at elitr sed ipsum justo dolor sed clita amet diam</h2>
                        <div className="flex"><Image src={'/img3.jpg'} objectFit="contain" alt={'table'} width="260"
                            height="1000"
                            className="bg-mint text-mint h-[10vh] w-[10vh] rounded-full "></Image>
                            <h2 className=" my-2 text-[#0F172B] font-serif font-semibold text-xl mt-5 ml-5 font1"> Julie Russal   </h2>

                        </div>


                    </div>

                </div>
            </div>
        </section>
    );
}