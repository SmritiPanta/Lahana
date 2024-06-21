import Image from "next/image";
import { GoDash } from "react-icons/go";
import Link from 'next/link';


export const Lunch = () => {
    return (
        <section id='menu-us' className="mb-10  ">
          
            <div className="text-center flex justify-center items-center gap-2">
                <h2 className="text-[#660f0f] font-bold text-4xl stylefont flex"> <div className=" -mt-5 -ml-1 text-7xl"><GoDash /></div>Check Out Our Menu <div className=" -mt-5 -ml-1 text-7xl"><GoDash /></div></h2>
                
            </div>

            
            <h2 className="text-[#0F172B] font-bold text-2xl italic flex justify-center mt-5 font1"> Menu for  first and third week of the month</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ml-7 mt-5  place-items-center ">
                <div className=" p-4 rounded-lg text-center w-[50vh] h-[50vh]">
                <h4 className="font-bold text-2xl my-2">Sunday</h4>
                    <img src={"/food.jpg"} alt={'prawn'} className="h-[30vh] w-[40vh] rounded-xl" />
                    <h4 className="font-semibold my-2 text-[1.3rem]"> Chicken MoMo </h4>
                   

                </div>

                <div className=" p-4 rounded-lg text-center w-[50vh] h-[50vh]">
                <h4 className="font-bold text-2xl my-2">Monday</h4>
                    <img src={"/food.jpg"} alt={'prawn'} className="h-[30vh] w-[40vh] rounded-xl" ml-5 />
                    <h4 className="font-semibold my-2 text-[1.3rem]">Veg Samyabaji</h4>
                    
                </div>
                
                <div className=" p-4 rounded-lg text-center w-[50vh] h-[50vh]">
                <h4 className="font-bold text-2xl my-2">Tuesday</h4>
                    <img src={"/indian-food.png"} alt={'prawn'} className="h-[30vh] w-[40vh] rounded-xl" ml-5 />
                    <h4 className="font-semibold my-2 text-[1.3rem]">Spaghetti, Manchurian , salad</h4>
                    
                </div>
                <div className=" p-4 rounded-lg text-center w-[50vh] h-[50vh]">
                <h4 className="font-bold text-2xl my-2">Wednesday</h4>
                    <img src={"/prawn-malabari.jpg"} alt={'prawn'} className="h-[30vh] w-[40vh] rounded-xl" ml-5 />
                    <h4 className="font-semibold my-2 text-[1.3rem] ">Chicken Biryani, Raita and Salad</h4>
                    
                </div>
                <div className=" p-4 rounded-lg text-center w-[50vh] h-[50vh]">
                <h4 className="font-bold text-2xl my-2">Thursday</h4>
                    <img src={"/icecream.jpg"} alt={'prawn'} className="h-[30vh] w-[40vh] rounded-xl" ml-5 />
                    <h4 className="font-semibold my-2 text-[1.3rem]">Chicken Club Sandwich and Fries</h4>
                    
                </div>
                <div className=" p-4 rounded-lg text-center w-[50vh] h-[50vh]">
                <h4 className="font-bold text-2xl my-2">Friday</h4>
                    <img src={"/about-4.jpg"} alt={'prawn'} className="h-[30vh] w-[40vh] rounded-xl" ml-5 />
                    <h4 className="font-semibold my-2 text-[1.3rem]">Chicken Chow Mein</h4>
                    
                </div>
                
                
                </div>
                <h2 className="text-[#0F172B] font-bold text-2xl italic flex justify-center mt-10 font1"> Menu for  second and last week of the month</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ml-7 mt-5  place-items-center ">
                <div className=" p-4 rounded-lg text-center w-[50vh] h-[50vh]">
                <h4 className="font-bold text-2xl my-2">Sunday</h4>
                    <img src={"/food.jpg"} alt={'prawn'} className="h-[30vh] w-[40vh] rounded-xl" />
                    <h4 className="font-semibold my-2 text-[1.3rem]"> Chicken Samyabaji </h4>
                   

                </div>

                <div className=" p-4 rounded-xl text-center w-[50vh] h-[50vh]">
                <h4 className="font-bold text-2xl my-2">Monday</h4>
                    <img src={"/food.jpg"} alt={'prawn'} className="h-[30vh] w-[40vh] rounded-xl" ml-5 />
                    <h4 className="font-semibold my-2 text-[1.3rem]">Chola, Bhatura and Onion Ring</h4>
                    
                </div>
                
                <div className=" p-4 rounded-lg text-center w-[50vh] h-[50vh]">
                <h4 className="font-bold text-2xl my-2">Tuesday</h4>
                    <img src={"/indian-food.png"} alt={'prawn'} className="h-[30vh] w-[40vh] rounded-xl" ml-5 />
                    <h4 className="font-semibold my-2 text-[1.3rem]">Pasta, Manchurian and salad</h4>
                    
                </div>
                <div className=" p-4 rounded-lg text-center w-[50vh] h-[50vh]">
                <h4 className="font-bold text-2xl my-2">Wednesday</h4>
                    <img src={"/prawn-malabari.jpg"} alt={'prawn'} className="h-[30vh] w-[40vh] rounded-xl" ml-5 />
                    <h4 className="font-semibold my-2 text-[1.3rem] ">Chicken Biryani, Raita and Salad</h4>
                    
                </div>
                <div className=" p-4 rounded-lg text-center w-[50vh] h-[50vh]">
                <h4 className="font-bold text-2xl my-2">Thursday</h4>
                    <img src={"/icecream.jpg"} alt={'prawn'} className="h-[30vh] w-[40vh] rounded-xl" ml-5 />
                    <h4 className="font-semibold my-2 text-[1.3rem]">Chicken Manchurian and Salad</h4>
                    
                </div>
                <div className=" p-4 rounded-lg text-center w-[50vh] h-[50vh]">
                <h4 className="font-bold text-2xl my-2">Friday</h4>
                    <img src={"/about-4.jpg"} alt={'prawn'} className="h-[30vh] w-[40vh] rounded-xl" ml-5 />
                    <h4 className="font-semibold my-2 text-[1.3rem]">Chicken Fried Rice and Salad</h4>
                    
                </div>
                
                
                </div>
                <div className="  w-[70vh] mt-5 ml-10 px-10 flex  flex-col justify-end ">
                    <h1>  To learn more about lahana lunch box</h1>
                    
        </div>

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
}