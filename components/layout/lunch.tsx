/*import Image from "next/image";
import { GoDash } from "react-icons/go";
import Link from 'next/link';


export const Lunch = () => {
    return (
        <section id='menu-us' className="mb-10  ">
          

        <div className="text-center flex justify-center  mt-10 items-center gap-2">
                <h2 className="text-[#660f0f] font-bold text-4xl stylefont flex"> <div className=" -mt-5 -ml-1 text-7xl"><GoDash /></div>Welcome to Lahana Lunch Box <div className=" -mt-5 -ml-1 text-7xl"><GoDash /></div></h2>
  
            </div>
            <h2 className="text-[#0F172B] font-semibold text-2xl  flex justify-center mt-5 font1">  Here is your menu for  first and third week of the month.</h2>
        <div className='ml-7  py-10 grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3  '>
        
        <div className=' flex  h-[30vh] w-[50vh]  justify-between  rounded-xl p-4  shadow-2xl  '>
        
        <div className='flex flex-col'>
          <h2 className='my-2  py-2 flex gap-4 text-3xl font-bold text-black'>
            
            Sunday
          </h2>
          
          <h2 className='my-2  flex gap-3 text-lg font-semibold text-black'>
           
            Chicken Momo
          </h2>
          
          
          </div>
          <div className='flex items-center w-100 '>
          <img src={"/veg.jpg"} alt={'prawn'} className="h-[12vh] w-[12vh] rounded-xl "  />
          </div>
        </div>
        <div className=' flex  h-[30vh] w-[50vh]  justify-between  rounded-xl p-4  shadow-2xl  '>
        
        <div className='flex flex-col'>
          <h2 className='my-2  py-2 flex gap-4 text-3xl font-bold text-black'>
            
            Monday
          </h2>
          
          <h2 className='my-2  flex gap-3 text-lg font-semibold text-black'>
           
          Veg Samyabaji
          </h2>
          
          
          </div>
          <div className='flex items-center w-100 '>
          <img src={"/veg.jpg"} alt={'prawn'} className="h-[12vh] w-[12vh] rounded-xl "  />
          </div>
        </div>
        <div className=' flex  h-[30vh] w-[50vh]  justify-between  rounded-xl p-4  shadow-2xl  '>
        
        <div className='flex flex-col'>
          <h2 className='my-2  py-2 flex gap-4 text-3xl font-bold text-black'>
            
            Tuesday
          </h2>
          
          <h2 className='my-2  flex gap-3 text-lg font-semibold text-black'>
           
          Spaghetti, Manchurian and Salad
          </h2>
          
          
          </div>
          <div className='flex items-center w-100 '>
          <img src={"/veg.jpg"} alt={'prawn'} className="h-[12vh] w-[12vh] rounded-xl "  />
          </div>
        </div>
        <div className=' flex  h-[30vh] w-[50vh]  justify-between  rounded-xl p-4  shadow-2xl  '>
        
        <div className='flex flex-col'>
          <h2 className='my-2  py-2 flex gap-4 text-3xl font-bold text-black'>
            
            Wednesday
          </h2>
          
          <h2 className='my-2  flex gap-3 text-lg font-semibold text-black'>
           
          Chicken Biryani, Raita and Salad
          </h2>
          
          
          </div>
          <div className='flex items-center w-100 '>
          <img src={"/veg.jpg"} alt={'prawn'} className="h-[12vh] w-[12vh] rounded-xl "  />
          </div>
        </div>
        <div className=' flex  h-[30vh] w-[50vh]  justify-between  rounded-xl p-4  shadow-2xl  '>
        
        <div className='flex flex-col'>
          <h2 className='my-2  py-2 flex gap-4 text-3xl font-bold text-black'>
            
            Thursday
          </h2>
          
          <h2 className='my-2  flex gap-3 text-lg font-semibold text-black'>
           
          Chicken Club Sandwich and Fries
          </h2>
          
          
          </div>
          <div className='flex items-center w-100 '>
          <img src={"/veg.jpg"} alt={'prawn'} className="h-[12vh] w-[12vh] rounded-xl "  />
          </div>
        </div>
        <div className=' flex  h-[30vh] w-[50vh]  justify-between  rounded-xl p-4  shadow-2xl  '>
        
        <div className='flex flex-col'>
          <h2 className='my-2  py-2 flex gap-4 text-3xl font-bold text-black'>
            
            Friday
          </h2>
          
          <h2 className='my-2  flex gap-3 text-lg font-semibold text-black'>
           
          Chicken Chow Mein
          </h2>
          
          
          </div>
          <div className='flex items-center w-100 '>
          <img src={"/veg.jpg"} alt={'prawn'} className="h-[12vh] w-[12vh] rounded-xl "  />
          </div>
        </div>
        </div>





        
            <h2 className="text-[#0F172B] font-semibold text-2xl  flex justify-center mt-5 font1">  Here is your menu for second and last week of the month.</h2>
        <div className='ml-7  py-10 grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3  '>
        
        <div className=' flex  h-[30vh] w-[50vh]  justify-between  rounded-xl p-4  shadow-2xl  '>
        
        <div className='flex flex-col'>
          <h2 className='my-2  py-2 flex gap-4 text-3xl font-bold text-black'>
            
            Sunday
          </h2>
          
          <h2 className='my-2  flex gap-3 text-lg font-semibold text-black'>
           
            Chicken Samyabaji
          </h2>
          
          
          </div>
          <div className='flex items-center w-100 '>
          <img src={"/food.jpg"} alt={'prawn'} className="h-[12vh] w-[12vh] rounded-xl "  />
          </div>
        </div>
        <div className=' flex  h-[30vh] w-[50vh]  justify-between  rounded-xl p-4  shadow-2xl  '>
        
        <div className='flex flex-col'>
          <h2 className='my-2  py-2 flex gap-4 text-3xl font-bold text-black'>
            
            Monday
          </h2>
          
          <h2 className='my-2  flex gap-3 text-lg font-semibold text-black'>
           
         Chhola, Bhatura and Onion Ring
          </h2>
          
          
          </div>
          <div className='flex items-center w-100 '>
          <img src={"/food.jpg"} alt={'prawn'} className="h-[12vh] w-[12vh] rounded-xl "  />
          </div>
        </div>
        <div className=' flex  h-[30vh] w-[50vh]  justify-between  rounded-xl p-4  shadow-2xl  '>
        
        <div className='flex flex-col'>
          <h2 className='my-2  py-2 flex gap-4 text-3xl font-bold text-black'>
            
            Tuesday
          </h2>
          
          <h2 className='my-2  flex gap-3 text-lg font-semibold text-black'>
           
          Pasta,Manchurian and Salad
          </h2>
          
          
          </div>
          <div className='flex items-center w-100 '>
          <img src={"/food.jpg"} alt={'prawn'} className="h-[12vh] w-[12vh] rounded-xl "  />
          </div>
        </div>
        <div className=' flex  h-[30vh] w-[50vh]  justify-between  rounded-xl p-4  shadow-2xl  '>
        
        <div className='flex flex-col'>
          <h2 className='my-2  py-2 flex gap-4 text-3xl font-bold text-black'>
            
            Wednesday
          </h2>
          
          <h2 className='my-2  flex gap-3 text-lg font-semibold text-black'>
           
          Chicken Biryani, Raita and Salad
          </h2>
          
          
          </div>
          <div className='flex items-center w-100 '>
          <img src={"/food.jpg"} alt={'prawn'} className="h-[12vh] w-[12vh] rounded-xl "  />
          </div>
        </div>
        <div className=' flex  h-[30vh] w-[50vh]  justify-between  rounded-xl p-4  shadow-2xl  '>
        
        <div className='flex flex-col'>
          <h2 className='my-2  py-2 flex gap-4 text-3xl font-bold text-black'>
            
            Thursday
          </h2>
          
          <h2 className='my-2  flex gap-3 text-lg font-semibold text-black'>
           
           Noodles,Chicken Manchurian and Salad
          </h2>
          
          
          </div>
          <div className='flex items-center w-100 '>
          <img src={"/food.jpg"} alt={'prawn'} className="h-[12vh] w-[14vh] rounded-xl "  />
          </div>
        </div>
        <div className=' flex  h-[30vh] w-[50vh]  justify-between  rounded-xl p-4  shadow-2xl  '>
        
        <div className='flex flex-col'>
          <h2 className='my-2  py-2 flex gap-4 text-3xl font-bold text-black'>
            
            Friday
          </h2>
          
          <h2 className='my-2  flex gap-3 text-lg font-semibold text-black'>
           
          Chicken Fried Rice and Salad
          </h2>
          
          
          </div>
          <div className='flex items-center w-100 '>
          <img src={"/food.jpg"} alt={'prawn'} className="h-[12vh] w-[12vh] rounded-xl "  />
          </div>
        </div>
        </div>
        
        </section>
    );
}*/
import Image from "next/image";
import { GoDash } from "react-icons/go";
import Link from 'next/link';

export const Lunch = () => {
  return (
    <section id='menu-us' className="mb-10">
      <div className="text-center flex justify-center mt-10 items-center gap-2">
        <h2 className="text-[#660f0f] font-bold text-4xl stylefont flex">
          <div className=" -mt-5 -ml-1 text-7xl">
            <GoDash />
          </div>
          Welcome to Lahana Lunch Box
          <div className=" -mt-5 -ml-1 text-7xl">
            <GoDash />
          </div>
        </h2>
      </div>
      <h2 className="text-[#0F172B] font-semibold text-2xl flex justify-center mt-5 font1">
        Here is your menu for the first and third week of the month.
      </h2>
      <div className='py-10 grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {[
          { day: "Sunday", meal: "Chicken Momo", img: "/veg.jpg" },
          { day: "Monday", meal: "Veg Samyabaji", img: "/veg.jpg" },
          { day: "Tuesday", meal: "Spaghetti, Manchurian and Salad", img: "/veg.jpg" },
          { day: "Wednesday", meal: "Chicken Biryani, Raita and Salad", img: "/veg.jpg" },
          { day: "Thursday", meal: "Chicken Club Sandwich and Fries", img: "/veg.jpg" },
          { day: "Friday", meal: "Chicken Chow Mein", img: "/veg.jpg" },
        ].map((item, index) => (
          <div key={index} className='flex h-[30vh] w-[80vw] max-w-md justify-between rounded-xl p-4 shadow-2xl'>
            <div className='flex flex-col'>
              <h2 className='my-2 py-2 text-3xl font-bold text-black'>
                {item.day}
              </h2>
              <h2 className='my-2 text-lg font-semibold text-black'>
                {item.meal}
              </h2>
            </div>
            <div className='flex items-center'>
              <img src={item.img} alt={item.meal} className="h-[12vh] w-[12vh] rounded-xl" />
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-[#0F172B] font-semibold text-2xl flex justify-center mt-5 font1">
        Here is your menu for the second and last week of the month.
      </h2>
      <div className='py-10 grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {[
          { day: "Sunday", meal: "Chicken Samyabaji", img: "/food.jpg" },
          { day: "Monday", meal: "Chhola, Bhatura and Onion Ring", img: "/food.jpg" },
          { day: "Tuesday", meal: "Pasta, Manchurian and Salad", img: "/food.jpg" },
          { day: "Wednesday", meal: "Chicken Biryani, Raita and Salad", img: "/food.jpg" },
          { day: "Thursday", meal: "Noodles, Chicken Manchurian and Salad", img: "/food.jpg" },
          { day: "Friday", meal: "Chicken Fried Rice and Salad", img: "/food.jpg" },
        ].map((item, index) => (
          <div key={index} className='flex h-[30vh] w-[80vw] max-w-md justify-between rounded-xl p-4 shadow-2xl'>
            <div className='flex flex-col'>
              <h2 className='my-2 py-2 text-3xl font-bold text-black'>
                {item.day}
              </h2>
              <h2 className='my-2 text-lg font-semibold text-black'>
                {item.meal}
              </h2>
            </div>
            <div className='flex items-center'>
              <img src={item.img} alt={item.meal} className="h-[12vh] w-[12vh] rounded-xl" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
