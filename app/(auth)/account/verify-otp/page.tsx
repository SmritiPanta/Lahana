
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { ChevronLeftIcon } from '@radix-ui/react-icons';

import { buttonVariants } from '@/components/ui/button';
import { VerifyOTPForm } from '@/components/auth/user-login-phone-form';

import { decodeText } from '@/lib/encoder';

const AccountVerifyPage = async ({
  searchParams: { t },
}: {
  searchParams: { t?: string };
}) => {
  if (!t) {
    redirect('/');
  }

  return (
    <div className='flex flex-col items-center gap-4'>
      <Link
        href='/login'
        className={buttonVariants({ variant: 'outline', size: 'icon' })}
      >
        <ChevronLeftIcon className='size-6' />
      </Link>
      <h1 className='text-center font-heading text-3xl font-semibold tracking-tighter'>
        Enter code
      </h1>
      <h1 className='text-center font-heading'>
        We&apos;ve sent an SMS with an activation code to your phone{' '}
        <span className='whitespace-nowrap font-bold'>{decodeText(t)}</span>
      </h1>
      <VerifyOTPForm token={t} />
    </div>
  );
};

export default AccountVerifyPage;
