'use client';

import { useTransition } from 'react';
import Link from 'next/link';

import { zodResolver } from '@hookform/resolvers/zod';

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
import { Label } from '@/components/ui/label';
import { Loader } from '@/components/icons/loader';
import { updateCustomer } from '@/lib/api';
import { UpdateCustomerResponseType } from '@/lib/api/types';

const updateGeneralInformationSchema = z.object({
  firstName: z.string().min(1, 'First name is required.'),
  lastName: z.string().min(1, 'Last name is required.'),
  phoneNumber: z.string().optional(),
  emailAddress: z.string()
});

type UpdateGeneralInformationInput = z.infer<
  typeof updateGeneralInformationSchema
>;

type GeneralInformationFormProps = {
  className?: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string | null;
  emailAddress: string;
};

export const GeneralInformationForm = ({
  className = undefined,
  firstName,
  lastName,
  phoneNumber = '',
  emailAddress ='',
}: GeneralInformationFormProps) => {
  const form = useForm<UpdateGeneralInformationInput>({
    resolver: zodResolver(updateGeneralInformationSchema),
    defaultValues: {
      firstName,
      lastName,
      phoneNumber: phoneNumber || '',
      emailAddress: emailAddress
    },
  });

  const [isPending, startTransition] = useTransition();

  const shouldUpdate = form.formState.isDirty;
  const rootError = form.formState.errors.root?.message;

  const onSubmit = (values: UpdateGeneralInformationInput) => {
    startTransition(async () => {
      try {
        const {data} = await updateCustomer({ input: values });

        if (data?.updateCustomer?.__typename === 'Customer') {
          form.reset({
            firstName: data.updateCustomer.firstName,
            lastName: data.updateCustomer.lastName,
            phoneNumber: data.updateCustomer.phoneNumber || '',
          });
        }

        //
        // TODO: handle error
        //
      } catch (error) {
        console.log(error);
      }
    });
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>General Information</CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <div className='grid gap-4 md:grid-cols-2'>
              <FormField
                control={form.control}
                name='firstName'
                disabled={isPending}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=''>First Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='John'
                        type='text'
                        autoCapitalize='none'
                        autoComplete=''
                        autoCorrect='off'
                        required
                        disabled={isPending}
                        {...field}
                      />
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
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Doe'
                        type='text'
                        autoCapitalize='none'
                        autoComplete=''
                        autoCorrect='off'
                        required
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />


              {/**
               * The email address cannot be changed from this form.
               */}
              <div className='space-y-2'>
                <Label>Email Address</Label>
                <div className='w-full rounded-md border border-input bg-transparent p-3 shadow-sm'>
                  {emailAddress}
                </div>
                
              </div>
              <FormField
                control={form.control}
                name='phoneNumber'
                disabled={isPending}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='(123) 456-7890'
                        type='text'
                        autoCapitalize='none'
                        autoComplete=''
                        autoCorrect='off'
                        disabled={isPending}
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
              className='px-10'
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
              className='px-6'
            >
              Cancel
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};
