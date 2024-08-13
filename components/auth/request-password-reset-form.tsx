'use client';

import { HTMLAttributes, useTransition } from 'react';
import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { requestPasswordReset } from '@/providers/account';
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
import { Input } from '@/components/ui/input';
import { Loader } from '@/components/icons/loader';

import { cn } from '@/lib/utils';

const requestPasswordResetSchema = z.object({
  emailAddress: z
    .string()
    .email('Invalid email address')
    .min(1, 'Email is required.'),
});

type RequestPasswordResetInput = z.infer<typeof requestPasswordResetSchema>;

interface RequestPasswordResetFormProps
  extends HTMLAttributes<HTMLFormElement> {}

export const RequestPasswordResetForm = ({
  className,
  ...props
}: RequestPasswordResetFormProps) => {
  const form = useForm<RequestPasswordResetInput>({
    resolver: zodResolver(requestPasswordResetSchema),
    defaultValues: {
      emailAddress: '',
    },
  });
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const onSubmit = (values: RequestPasswordResetInput) => {
    startTransition(async () => {
      const data = await requestPasswordReset({
        emailAddress: values.emailAddress,
      });

      if (data?.requestPasswordReset?.__typename === 'Success') {
        toast.success('Password Reset Instructions Sent', {
          description:
            'Check your email for instructions on how to reset your password.',
        });
        router.push('/login');
      }
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
          name='emailAddress'
          disabled={isPending}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  type='email'
                  autoCapitalize='none'
                  autoCorrect='off'
                  required
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Enter your account&apos;s email address to receive password
                reset instructions.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type='submit'
          disabled={isPending}
          className='w-full'
        >
          {isPending ? (
            <>
              <Loader className='mr-2 size-4 animate-spin' />
              Sending...
            </>
          ) : (
            'Send Reset Instructions'
          )}
        </Button>
      </form>
    </Form>
  );
};
