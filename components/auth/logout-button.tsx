'use client';

import { useFormState, useFormStatus } from 'react-dom';

import { toast } from 'sonner';

import { Loader } from '@/components/icons/loader';

import { cn } from '@/lib/utils';
import { logoutAction } from './actions';



type LogoutButtonProps = {
  className?: string;
};

export const SubmitButton = ({ className = undefined }: LogoutButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      className={cn('inline-flex cursor-pointer items-center gap-2', className)}
      aria-disabled={pending}
    >
      {pending ? (
        <>
          <Loader className='size-4 animate-spin' />
          <span>Logging out...</span>
        </>
      ) : (
        <span className='justify-center rounded-xl bg-[#EE2916] px-6 py-2 text-[#ffff] hover:bg-gray-500'>Log Out</span>
      )}
    </button>
  );
};

export const LogoutButton = ({ ...props }: LogoutButtonProps) => {
  const [state, formAction] = useFormState(logoutAction, {
    success: false,
    message: '',
  });
console.log(state)
  if (state?.message) 
    {
    toast.error('Failed to log out', {
      description: state.message,
      
    });
  }

  return (
    <form
      action={formAction}
      className='w-full'
    >
      <SubmitButton {...props} />
    </form>
  );
};
