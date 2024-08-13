'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { MdEmail } from "react-icons/md";
import { BsPersonFill } from 'react-icons/bs';
import { FaLock } from "react-icons/fa";

import { FaPhoneAlt } from "react-icons/fa";

import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
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

import { encodeText } from '@/lib/encoder';
import { cn } from '@/lib/utils';
import { signUpWithPhone } from '@/lib/api';


//
// TODO: update password validation
//
const registerSchema = z
  .object({
    // TODO: update validation for phone number
    phone: z.string().min(1, {
      message: 'Phone number is required.',
    }),
    firstName: z.string().trim().min(1, {
      message: 'First name is required.',
    }),
    lastName: z.string().trim().min(1, {
      message: 'Last name is required.',
    }),
    email: z.string().trim().email({
      message: 'Invalid email address.',
    }),
    password: z.string().min(8, {
      message: 'Password must be at least 8 characters long.',
    }),
    confirmPassword: z.string().min(1, {
      message: 'Confirm password is required.',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

type RegisterInput = z.infer<typeof registerSchema>;

export const UserRegisterForm = ({
  className = undefined,
}: {
  className?: string;
}) => {
  const form = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      firstName: '',
      phone: '',
      lastName: '',
      password: '',
      confirmPassword: '',
    },
  });
  const [revealPassword, setRevealPassword] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const rootError = form.formState.errors.root?.message;

  const onSubmit = (values: RegisterInput) => {
    console.log('form submitted')
    startTransition(async () => {
      
      try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { confirmPassword, ...input } = values;
        console.log({input})
        const {data} = await signUpWithPhone({ input });
        console.log(data)
        if (data?.signupWithPhone?.__typename === 'SignUpSuccess') {
          toast.success('Account created successfully', {
            description:
              'Please check your email for verification instructions.',
          });

          router.push(`/account/verify-otp?t=${encodeText(input.phone)}`);
          return;
        }

        if (data?.signupWithPhone?.__typename === "ErrorResult" || data?.signupWithPhone?.__typename === "SignUpError") {
          form.setError('root', {
            message: data?.signupWithPhone.message,
          });
          return;
        }
        throw new Error('Something went wrong.');
      } catch (error) {
        console.log(error);
        form.setError('root', {
          message: (error as Error).message,
        });
      }
    });
  };

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
              <FaPhoneAlt className='text-[#EE2916] text-xl absolute mt-5 ml-3' />
                <Input
                  type='text'
                placeholder='Phone Number '
                  required
                  {...field}
                  
                className='mt-2 w-full rounded-xl px-10 py-2 text-[[#EE2916] border-none  font-semibold placeholder-[#EE2916] '
                />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name='email'
          disabled={isPending}
          render={({ field }) => (
            <FormItem>
              
              <FormControl>
              <div className='relative flex items-center '>
              <MdEmail  className='text-[#EE2916] text-2xl absolute mt-5 ml-3' />
                <Input
                  
                  type='email'
                  
                placeholder='user@gmail.com'
                className='mt-2 w-full rounded-xl px-10 py-2 text-[#EE2916] border-none font-semibold placeholder-[#EE2916] '
                  autoComplete='email'
                  required
                  {...field}
                />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex gap-2'>
        <FormField
          control={form.control}
          name='firstName'
          disabled={isPending}
          render={({ field }) => (
            <FormItem>
              <FormLabel></FormLabel>
              <FormControl>
              <div className='relative flex items-center '>
              <BsPersonFill className='text-[#EE2916] text-2xl absolute mt-4 ml-3' />
                <Input
                  placeholder='First Name'
                  autoComplete='given-name'
                  required
                  {...field}
                  className='mt-1 w-full rounded-xl px-10 py-2 text-[#EE2916] border-none font-semibold placeholder-[#EE2916] '
                /></div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='lastName'
          disabled={isPending}
          render={({ field }) => (
            <FormItem>
              <FormLabel></FormLabel>
              <FormControl>
              <div className='relative flex items-center '>
              <BsPersonFill className='text-[#EE2916] text-2xl absolute mt-5 ml-3' />
                <Input
                  placeholder='Last Name'
                  autoComplete='family-name'
                  required
                  {...field}
                  className='mt-1 w-full rounded-xl px-10 py-2 text-[#EE2916] border-none font-semibold placeholder-[#EE2916] '
                />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <FormField
          control={form.control}
          name='password'
          disabled={isPending}
          render={({ field }) => (
            <FormItem>
              
              <FormControl>
              <div className='relative flex items-center'>
              <FaLock  className='text-[#EE2916] text-xl absolute mt-5 ml-3'/>
                <Input
                  
                  autoCapitalize='none'
                  autoComplete='new-password'
                  autoCorrect='off'
                  required
                  {...field}
                  type='password'
                placeholder='Password'
                className='mt-2 w-full  rounded-xl px-10 py-2 font-semibold border-none text-[#EE2916] placeholder-[#EE2916]  '
                />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='confirmPassword'
          disabled={isPending}
          render={({ field }) => (
            <FormItem>
              
              <FormControl>
              <div className='relative flex items-center'>
              <FaLock  className='text-[#EE2916] text-xl absolute mt-5  ml-3'/>
                <Input
                  
                  autoCapitalize='none'
                  autoComplete='new-password'
                  autoCorrect='off'
                  required
                  {...field}
                  type='password'
                  placeholder=' Confirm Password'
                  className='mt-2 w-full  rounded-xl px-10 py-2 font-semibold border-none text-[#EE2916] placeholder-[#EE2916]' 
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
        <Button
          type='submit'
          disabled={isPending}
          className='mt-5 flex  w-full items-center justify-center rounded-2xl bg-[#EE2916] px-5 py-2 font-semibold text-[#ffff] '
        >
          {isPending ? (
            <>
              <Loader className='mr-2 size-4 animate-spin' />
              Signing in
            </>
          ) : (
            'Sign up'
          )}
        </Button>
      </form>
    </Form>
  );
};