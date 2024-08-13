import { redirect } from 'next/navigation';

import { getSession } from '@/providers/session';

import { RequestPasswordResetForm } from '@/components/auth/request-password-reset-form';

const RequestResetPasswordPage = async () => {
  const data = await getSession();

  if (data?.currentUser) {
    redirect('/');
  }

  return (
    <div className='flex flex-col gap-6 space-y-2'>
      <h1 className='text-center font-heading text-3xl font-semibold tracking-tight'>
        Forgot Password?
      </h1>
      <RequestPasswordResetForm />
    </div>
  );
};

export default RequestResetPasswordPage;