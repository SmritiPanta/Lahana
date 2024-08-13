'use client';

import { useTransition } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';
import { BsPersonFill } from 'react-icons/bs';
import { FaLock } from 'react-icons/fa';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
// import { PasswordInput } from '#/components/ui/password-input';
import { Loader } from '@/components/icons/loader';

import { cn } from '@/lib/utils';
import { authenticate } from '@/lib/api';




const loginSchema = z.object({
  // TODO: update validation for phone number
  phone: z.string().min(1, {
    message: 'Phone number is required.',
  }),
  /**
   * No validation for password in login to allow access
   * for users who have previously set their passwords
   * before validation changes in signup
   */
  password: z.string().min(1, {
    message: 'Password is required',
  }),
  rememberMe: z.boolean().default(false).optional(),
});

type LoginInput = z.infer<typeof loginSchema>;

export const UserLoginForm = ({
  className = undefined,
  
}: {
  className?: string;
  redirectTo?: string;
}) => {
  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      phone: '',
      password: '',
      rememberMe: false,
    },
  });
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const from = params.get('from');




  const onSubmit = (values: LoginInput) => {
    console.log('login submitted')
    startTransition(async () => {
      try {

        const {data} = await authenticate({
          input: {
            phone: {
              phone: values.phone,
              password: values.password,
            },
          },
          rememberMe: values.rememberMe,
        });

        console.log({data})
        if (data?.authenticate?.__typename === 'CurrentUser') {
          router.push('/');
          return;
        }

        if (
          data?.authenticate?.__typename === 'InvalidCredentialsError' 
        ) {
          form.setError('root', {
            message: data?.authenticate.message,
          });
          return;
        }

        throw new Error('Unexpected error');
      } catch (error) {
        console.log(error);
        form.setError('root', {
          message: (error as Error).message
        });
      }
    });
  };

  const rootError = form.formState.errors.root?.message;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('space-y-4', className)}
      >
        <FormField
          control={form.control}
          name='phone'
          disabled={isPending}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className='relative flex items-center '>
                  <BsPersonFill className='absolute ml-3 mt-5 text-2xl text-[#EE2916]' />
                  <Input
                    type='text'
                    placeholder='User Name / Email'
                    id='username'
                    required
                    {...field}
                    className='mt-6 w-full rounded-xl px-10 py-2 font-semibold border-none text-[#EE2916] placeholder-[#EE2916]'
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          disabled={isPending}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className='relative flex items-center'>
                  <FaLock className='absolute ml-3 mt-7 text-xl text-[#EE2916]' />
                  <Input
                    type='text'
                    placeholder='Password'
                    id ='password'
                    
                    required
                    {...field}
                    className='mt-3 w-full  rounded-xl border-none px-10 py-2 font-semibold text-[#EE2916] placeholder-[#EE2916]'
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {!!rootError && (
          <p className='text-sm font-medium text-destructive'>{rootError}</p>
        )}
        <div className='flex justify-between py-2'>
          <FormField
            control={form.control}
            name='rememberMe'
            render={({ field }) => (
              <FormItem className='flex items-center  space-y-0'>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className='bg-white px-1 border-none'
                  />
                </FormControl>
                <FormLabel className='flex  px-2 py-1 mt-1 text-white'>
                  Remember me
                </FormLabel>
              </FormItem>
            )}
          />
          <Link
            href='/account/request-password-reset'
            className='ml-8 px-5 font-bold text-[#EE2916] hover:text-gray-600 underline-offset-4 '
          >
            Forgot password?
          </Link>
        </div>
        <Button
          type='submit'
          disabled={isPending}
          className='mt-1 flex text-xl w-full items-center justify-center rounded-2xl bg-[#EE2916] px-5 py-3 font-bold text-[#ffff]'
        >
          {isPending ? (
            <>
              <Loader className='mr-2 size-4 animate-spin ' />
              Logging in...
            </>
          ) : (
            'Log in'
          )}
        </Button>
      </form>
    </Form>
  );
};
