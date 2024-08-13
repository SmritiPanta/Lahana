import { redirect } from 'next/navigation';

import { getSession } from '@/providers/session';

import { PasswordResetForm } from '@/components/auth/password-reset-form';

const RequestResetPasswordPage = async ({
  searchParams: { token },
}: {
  searchParams: { token: string };
}) => {
  if (!token) {
    redirect('/');
  }

  const data = await getSession();

  if (data?.currentUser) {  
    redirect('/');
  }

  return (
    <div className='flex flex-col gap-6 space-y-2'>
      <h1 className='text-center font-heading text-3xl font-semibold tracking-tight'>
        Set a new password
      </h1>
      <PasswordResetForm token={token} />
    </div>
  );
};

export default RequestResetPasswordPage;