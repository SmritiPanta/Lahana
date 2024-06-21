import { GiForkKnifeSpoon } from "react-icons/gi";
import { PiTrolleyFill } from "react-icons/pi";
import { IoPeopleSharp } from "react-icons/io5";
import { RiCustomerServiceFill } from "react-icons/ri";

export const New = () => {
    return (
        <div id ='service-us'className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ml-7 mt-10  overflow-hidden mb-5 ">
            <div className=" p-4  text-center w-[50vh] h-[40vh] bg-white shadow-xl rounded-xl">
                <div className=" flex text-5xl text-[#4e2424] justify-center"> <IoPeopleSharp /></div>
                <h2 className="font-semibold my-2 text-black text-3xl font1">Master Chefs</h2>
                <p className="px-10 text-black text-xl">  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
            <div className=" p-4  text-center w-[50vh] h-[40vh] bg-[white] shadow-xl rounded-xl">
                <div className=" flex text-5xl text-[#4e2424] justify-center"><GiForkKnifeSpoon /> </div>
                <h2 className="font-semibold my-2 text-black text-3xl font1">Quality Food</h2>
                <p className="px-10 text-black text-xl">  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
            <div className=" p-4  text-center w-[50vh] h-[40vh]  bg-[white] shadow-xl rounded-xl">
                <div className=" flex text-5xl text-[#4e2424] justify-center"><PiTrolleyFill /> </div>
                <h2 className="font-semibold my-2 text-black text-3xl font1">Online order</h2>
                <p className="px-10 text-black text-xl"> Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam </p>
            </div>
            <div className=" p-4  text-center w-[50vh] h-[40vh]  bg-[white]  shadow-xl rounded-xl">
                <div className=" flex text-5xl text-[#4e2424] justify-center"> <RiCustomerServiceFill /></div>
                <h2 className="font-semibold my-2 text-black text-3xl font1">24/7 Service</h2>
                <p className="px-10 text-black text-xl">  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
        </div>

    )
}
