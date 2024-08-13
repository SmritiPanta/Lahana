import Image from "next/image";

import { GoDash } from "react-icons/go";

export const Team = () => {
  return (
    <div className="mt-10 py-6  ">
      <h2 className=" stylefont mt-8 flex justify-center px-5  text-2xl font-semibold text-black ">
        {" "}
        <div className=" -ml-1 -mt-5 text-7xl">
          <GoDash />
        </div>
        Team Members{" "}
        <div className=" -ml-1 -mt-5 text-7xl">
          <GoDash />
        </div>{" "}
      </h2>
      <h1 className="font1 flex justify-center px-4  text-4xl font-semibold text-[#7e3939]">
        Our Master Chef
      </h1>
      <div className="ml-7 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className=" flex  h-[40vh] w-[40vh] flex-col justify-center rounded-xl p-4 text-center shadow-xl ">
          <Image
            src={"/team-3.jpg"}
            objectFit="contain"
            alt={"table"}
            width="260"
            height="1000"
            className="bg-mint text-mint ml-7 h-[25vh] w-[25vh] rounded-full "
          ></Image>
          <h2 className="my-2 text-2xl font-semibold text-black">
            {" "}
            Aldo Anderson
          </h2>
          <h2 className="my-2 text-xl font-semibold text-gray-600">
            Pastry Chef
          </h2>
        </div>
        <div className=" flex  h-[40vh] w-[40vh] flex-col justify-center rounded-xl p-4 text-center shadow-xl">
          <Image
            src={"/team-1.jpg"}
            objectFit="contain"
            alt={"table"}
            width="260"
            height="1000"
            className="bg-mint text-mint ml-7 h-[25vh] w-[25vh] rounded-full "
          ></Image>
          <h2 className="my-2 text-2xl font-semibold text-black">
            Richard Henry
          </h2>
          <h2 className="my-2 text-xl font-semibold text-gray-600">
            Executive Chef
          </h2>
        </div>
        <div className=" flex  h-[40vh] w-[40vh] flex-col justify-center rounded-xl p-4 text-center shadow-xl">
          <Image
            src={"/team-2.jpg"}
            objectFit="contain"
            alt={"table"}
            width="260"
            height="1000"
            className="bg-mint text-mint ml-7 h-[25vh] w-[25vh] rounded-full "
          ></Image>
          <h2 className="my-2 text-2xl font-semibold text-black">
            Andrew Clark{" "}
          </h2>
          <h2 className="my-2 text-xl font-semibold text-gray-600">
            Sous chef
          </h2>
        </div>
        <div className=" flex  h-[40vh] w-[40vh] flex-col justify-center rounded-xl p-4 text-center shadow-xl">
          <Image
            src={"/team-4.jpg"}
            objectFit="contain"
            alt={"table"}
            width="260"
            height="1000"
            className="bg-mint text-mint ml-7 h-[25vh] w-[25vh] rounded-full "
          ></Image>
          <h2 className="my-2 text-2xl font-semibold text-black">
            James Smith
          </h2>
          <h2 className="my-2 text-xl font-semibold text-gray-600">
            Chef de partie
          </h2>
        </div>
      </div>
    </div>
  );
};
