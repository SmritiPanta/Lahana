import Link from 'next/link';
import { redirect } from 'next/navigation';



import { UserRegisterForm } from '@/components/auth/user-register-form';

const SignUpPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const { from } = searchParams;
  

//   if (data.currentUser) {
    // redirect(`${from || '/menu'}`);
//   }

  return (
    <div className='flex flex-col gap-6 space-y-2'>
      <div className='right  ml-10 flex h-[450px]  w-[350px] flex-col rounded-xl md:w-[370px] mt-5'>
              <h1 className='font1 flex justify-center px-6 text-4xl  font-semibold  text-[#EE2916]   '>
                {' '}
                Register
              </h1>
              <h1 className='ml-2  px-10 py-2  text-xl flex justify-center text-white'>
                Create your new account
              </h1>
      <UserRegisterForm />
      <div className='ml-2 text-md font-semibold flex items-center justify-evenly gap-2  text-[#EE2916]'>
        Already have an account?
        <Link
          href={`/login${from ? `?from=${from}` : ''}`}
          className='font-bold text-xl text-[#EE2916]'
        >
          Log in
        </Link>
      </div>
      
    </div>
    </div>
  );
};

export default SignUpPage;
