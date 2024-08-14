import Link from 'next/link';
import { redirect } from 'next/navigation';


import { UserLoginForm } from '@/components/auth/user-login-form';

const LoginPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  

  
  return (
    <div className='flex flex-col  space-y-2 '>
      <div className='right ml-0 md:ml-10 flex h-[450px]   w-[350px] flex-col rounded-xl md:w-[370px] mt-40 md:mt-10'>
      <h1 className='font1 mt-10  flex justify-center text-4xl  font-semibold text-[#EE2916]'>
                {' '}
                Welcome Back
              </h1>
              <h1 className='ml-2  px-10 py-2 text-xl flex justify-center text-white'>
                Login to your Account
              </h1>
      <UserLoginForm />
      <div className='flex items-center gap-5 py-1'>
        <div className='px-2 py-2 font-semibold text-white'>Don&apos;t have an acocunt?</div>
        <Link
          href={`/signup`}
          className='px-2 py-2 font-semibold text-[#EE2916]'
        >
          Sign up
        </Link>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;