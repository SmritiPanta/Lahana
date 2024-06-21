import Image from "next/image";
import { BsArrowRightCircle } from "react-icons/bs";

export const Upper = () => {
    return (
        <section className="flex flex-col items-center justify-center h-[650px] overflow-x-hidden ">
            <div className="relative w-full h-full">
                <div className=" absolute -z-10 w-full h-full inset-0 ">
                    <Image
                        src={'/wallpaper.jpg'}
                        alt="background image"
                        className="w-full h-full" width={1000} height={100} />
                </div>

                <div className="flex h-full w-full flex-col justify-center gap-6 ml-10 md:px-10" >
                    <h1 className=" text-white text-3xl md:text-6xl font-bold max-w-[300px] md:max-w-[500px] font1">
                        Enjoy Our
                        Delicious Meal
                    </h1>
                    <p className="text-white max-w-[300px] pl-3 ">
                        From savory to sweet, our dishes are crafted with care and passion, promising to delight your palate with every mouthful.
                        Join us and experience the joy of truly tasty food,where every dish is a celebration of flavor.
                    </p>

                    <div className=" max-w-[500px]">
                        <button className=" text-[#ffff] flex gap-2 items-center px-10 ml-3 py-2 border  mt-3 rounded-xl  "> Order now <BsArrowRightCircle /> </button>
                    </div>


                </div>


            </div>

        </section>
    )
}