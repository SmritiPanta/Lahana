'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { requestUpdateCustomerEmailAddress } from '@/providers/customer';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password-input';
import { Loader } from '@/components/icons/loader';

const updateEmailSchema = z.object({
  newEmailAddress: z
    .string()
    .email('Invalid email address')
    .min(1, 'Email is required.'),
  password: z.string().min(1, 'Password is required.'),
});

type UpdateEmailInput = z.infer<typeof updateEmailSchema>;

export const EmailUpdateForm = ({
  className = undefined,
}: {
  className?: string;
}) => {
  const form = useForm<UpdateEmailInput>({
    resolver: zodResolver(updateEmailSchema),
    defaultValues: {
      newEmailAddress: '',
      password: '',
    },
  });

  const [revealPassword, setRevealPassword] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const shouldUpdate = form.formState.isDirty;
  const rootError = form.formState.errors.root?.message;

  const onSubmit = async (values: UpdateEmailInput) => {
    startTransition(async () => {
      try {
        const data = await requestUpdateCustomerEmailAddress(values);

        if (data.requestUpdateCustomerEmailAddress.__typename === 'Success') {
          router.push('/profile');
          return;
        }

        if (
          data.requestUpdateCustomerEmailAddress.__typename ===
          'InvalidCredentialsError'
        ) {
          form.setError('password', {
            type: 'manual',
            message: 'Invalid password',
          });
          return;
        }

        if (
          data.requestUpdateCustomerEmailAddress.__typename ===
          'EmailAddressConflictError'
        ) {
          form.setError('newEmailAddress', {
            type: 'manual',
            message: 'Email address already in use',
          });
          return;
        }

        form.setError('root', {
          type: 'manual',
          message: 'An unexpected error occurred',
        });
      } catch (error) {
        //
        // TODO: handle error
        //
        console.error(error);
      }
    });
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Change Email Address</CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <div className='grid gap-4 md:grid-cols-2'>
              <FormField
                control={form.control}
                name='password'
                disabled={isPending}
                render={({ field }) => (
                  <FormItem className='col-span-2'>
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
                name='newEmailAddress'
                disabled={isPending}
                render={({ field }) => (
                  <FormItem className='col-span-2'>
                    <FormLabel>New Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type='email'
                        autoCapitalize='none'
                        autoCorrect='off'
                        required
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {rootError && (
                <p className='text-sm font-medium text-destructive'>
                  {rootError}
                </p>
              )}
            </div>
          </CardContent>
          <CardFooter className='flex gap-4'>
            <Button
              type='submit'
              disabled={isPending || !shouldUpdate}
            >
              {isPending ? (
                <>
                  <Loader className='mr-2 size-4 animate-spin' />
                  Sending Email Verification
                </>
              ) : (
                'Verify Email Address'
              )}
            </Button>
            <Button
              type='reset'
              variant='outline'
              onClick={() => {
                form.reset();
              }}
              disabled={isPending || !shouldUpdate}
            >
              Cancel
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};
