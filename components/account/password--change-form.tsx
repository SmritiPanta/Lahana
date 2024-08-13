'use client';

import { useState, useTransition } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { updateCustomerPassword } from '@/providers/customer';
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
import { PasswordInput } from '@/components/ui/password-input';
import { Loader } from '@/components/icons/loader';

const updatePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, 'Current password is required.'),
    newPassword: z
      .string()
      .min(8, 'Password must be at least 8 characters long.'),
    confirmNewPassword: z.string().min(1, 'Confirm password is required.'),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: 'Passwords do not match',
    path: ['confirmNewPassword'],
  });

type UpdatePasswordInput = z.infer<typeof updatePasswordSchema>;

export const PasswordChangeForm = ({
  className = undefined,
}: {
  className?: string;
}) => {
  const form = useForm<UpdatePasswordInput>({
    resolver: zodResolver(updatePasswordSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
  });

  const [revealPassword, setRevealPassword] = useState(false);
  const [isPending, startTransition] = useTransition();

  const shouldUpdate = form.formState.isDirty;
  const rootError = form.formState.errors.root?.message;

  const onSubmit = async (values: UpdatePasswordInput) => {
    startTransition(async () => {
      const data = await updateCustomerPassword(values);

      if (data.updateCustomerPassword.__typename === 'Success') {
        form.reset();
        return;
      }

      if (
        data.updateCustomerPassword.__typename === 'InvalidCredentialsError'
      ) {
        form.setError('currentPassword', {
          type: 'manual',
          message: data.updateCustomerPassword.message,
        });
        return;
      }

      if (
        data.updateCustomerPassword.__typename === 'PasswordValidationError'
      ) {
        form.setError('newPassword', {
          type: 'manual',
          message: data.updateCustomerPassword.message,
        });
        return;
      }

      form.setError('root', {
        type: 'manual',
        message: data.updateCustomerPassword.message,
      });
    });
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Change Password</CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <div className='grid gap-4 md:grid-cols-2'>
              <FormField
                control={form.control}
                name='currentPassword'
                disabled={isPending}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Password</FormLabel>
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
                name='newPassword'
                disabled={isPending}
                render={({ field }) => (
                  <FormItem className='row-start-2'>
                    <FormLabel>New Password</FormLabel>
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
                name='confirmNewPassword'
                disabled={isPending}
                render={({ field }) => (
                  <FormItem className='md:row-start-2'>
                    {' '}
                    <FormLabel>Confirm New Password</FormLabel>
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
                  Saving...
                </>
              ) : (
                'Save'
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
