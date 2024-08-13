'use client';

import { HTMLAttributes, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { logout, passwordReset } from '@/providers/account';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { PasswordInput } from '@/components/ui/password-input';
import { Loader } from '@/components/icons/loader';

import { cn } from '@/lib/utils';

/**
 * TODO: use common schema for password
 */
const passwordResetSchema = z
  .object({
    password: z.string().min(8, 'Password must be at least 8 characters long.'),
    confirmPassword: z.string().min(1, 'Confirm password is required.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

type PasswordResetInput = z.infer<typeof passwordResetSchema>;

interface SetPasswordFormProps extends HTMLAttributes<HTMLFormElement> {
  token: string;
}

export const PasswordResetForm = ({
  className,
  token,
  ...props
}: SetPasswordFormProps) => {
  const form = useForm<PasswordResetInput>({
    resolver: zodResolver(passwordResetSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });
  const [revealPassword, setRevealPassword] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const rootError = form.formState.errors.root?.message;

  const onSubmit = (values: PasswordResetInput) => {
    startTransition(async () => {
      const data = await passwordReset({
        token,
        password: values.password,
      });

      if (data?.resetPassword.__typename === 'CurrentUser') {
        toast.success('Password Reset Successful', {
          description: 'You can now login with your new password.',
        });
        await logout();
        router.push('/login');
        return;
      }

      if (
        data?.resetPassword.__typename === 'PasswordResetTokenExpiredError' ||
        data.resetPassword.__typename === 'PasswordResetTokenInvalidError'
      ) {
        form.setError('root', {
          type: 'root',
          message:
            'Token is invalid or expired. Please request password reset again.',
        });
        return;
      }

      throw new Error('Something went wrong. Please try again.');
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('space-y-4', className)}
        {...props}
      >
        <FormField
          control={form.control}
          name='password'
          disabled={isPending}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput
                  autoCapitalize='none'
                  autoCorrect='off'
                  required
                  reveal={revealPassword}
                  setReveal={setRevealPassword}
                  {...field}
                />
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
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <PasswordInput
                  autoCapitalize='none'
                  autoCorrect='off'
                  required
                  reveal={revealPassword}
                  setReveal={setRevealPassword}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormDescription>
          Choose a password to complete the process
        </FormDescription>
        {rootError && (
          <p className='text-sm font-medium text-destructive'>{rootError}</p>
        )}
        <Button
          type='submit'
          disabled={isPending}
          className='w-full'
        >
          {isPending ? (
            <>
              <Loader className='mr-2 size-4 animate-spin' />
              Submitting...
            </>
          ) : (
            'Continue'
          )}
        </Button>
      </form>
    </Form>
  );
};