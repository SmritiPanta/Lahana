import Image from 'next/image';

import { GiForkKnifeSpoon } from 'react-icons/gi';
import { GoDash } from 'react-icons/go';

export const Middle = () => {
  return (
    <section
      id='about-us'
      className='ml-0 md:ml-10 pt-10 flex flex-col md:flex-row md:justify-between '
    >
      <div className='flex pt-5'>
        <div className='flex flex-col'>
          <div className=''>
            <Image
              src={'/about-1.jpg'}
              objectFit='contain'
              alt={'table'}
              width='260'
              height='1000'
              className='bg-mint text-mint fill-current '
            ></Image>
          </div>
          <div className=' ml-10 mt-4 px-5'>
            <Image
              src={'/about-3.jpg'}
              objectFit='contain'
              alt={'table'}
              width='200'
              height='1000'
              className='bg-mint text-mint fill-current  '
            ></Image>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='mt-4 py-10'>
            <Image
              src={'/about-2.jpg'}
              objectFit='contain'
              alt={'table'}
              width='200'
              height='1000'
              className='bg-mint text-mint fill-current '
            ></Image>
          </div>
          <div className=' -mt-5 '>
            <Image
              src={'/about-4.jpg'}
              objectFit='contain'
              alt={'table'}
              width='260'
              height='1000'
              className='bg-mint text-mint fill-current  '
            ></Image>
          </div>
        </div>
      </div>

      <div className=' px-0 md:px-10 '>
        <h2 className=' stylefont mt-8 flex px-5 font-serif text-2xl font-semibold text-[#7e3939]'>
          {' '}
          <div className=' -ml-1 -mt-5 text-7xl'>
            <GoDash />{' '}
          </div>{' '}
          about us{' '}
          <div className=' -ml-1 -mt-5 text-7xl'>
            <GoDash />{' '}
          </div>{' '}
        </h2>
        <h1 className='font1 mt-1 flex  flex-col sm:flex-row px-4 text-4xl font-semibold text-black'> 
          We have passion for great food.
        </h1>

        <h1 className='mt-3 md:h-[75vh] md:w-[80vh]  px-5 text-[1.2rem]'>
          {' '}
          Lahana LunchBox was born out of a love for great food and a commitment to sustainability. Our founders,[], envisioned a service that not only provided delicious meals but also promoted an eco-friendly lifestyle. We are here to provide a solution to the lunch dilemma of corporate staff, helping them enjoy affordable, delicious, and sustainable lunch options every day. With a focus on fresh ingrients, balanced nutrition, and eco-friebdly practice, we aim to revolutionize the way you experience lunch.
          
          <div className='flex pt-7'>
            <div className='flex'>
              <div className='mr-4 text-5xl font-bold text-[#7e3939]'>15</div>
              <div>
                Years of <br />
                EXPERIENCE
              </div>
            </div>
            <div className='flex '>
              <div className='ml-4 text-5xl font-bold text-[#7e3939]'>50</div>
              <div className='ml-5'>
                {' '}
                Popular <br />
                MASTER CHEFS
              </div>
            </div>
          </div>
        </h1>
      </div>
    </section>
  );
};
