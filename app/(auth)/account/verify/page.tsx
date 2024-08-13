import { redirect } from 'next/navigation';

// import {
//   VerifyCustomerAccountDocument,
//   VerifyCustomerAccountMutation,
// } from '#/generated/graphql';
// import { print } from 'graphql';

// import { buttonVariants } from '#/components/ui/button';

// const { BACKEND_URL } = process.env;

// const verifyCustomerAccount = async (token: string) => {
//
// TODO: handle errors
//
// const res = await fetch(`${BACKEND_URL}/graphql`, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     query: print(VerifyCustomerAccountDocument),
//     variables: { token },
//   }),
//   cache: 'no-store',
// });

// return (await res.json()).data as VerifyCustomerAccountMutation;
// };

const AccountVerifyPage = async ({
  searchParams: { token },
}: {
  searchParams: { token: string };
}) => {
  if (!token) {
    redirect('/');
  }

  return <div>Not implemented</div>;

  // const data = await verifyCustomerAccount(token);

  // if (data.verifyCustomerAccount.__typename === 'CurrentUser') {
  //   return (
  //     <div className='flex flex-col items-center gap-4'>
  //       <h1 className='font-heading text-xl'>Account verified</h1>
  //       <Link
  //         href='/login'
  //         className={buttonVariants({ variant: 'outline' })}
  //       >
  //         Log in
  //       </Link>
  //     </div>
  //   );
  // }

  // return (
  //   <h1 className='text-center font-heading text-xl'>
  //     {data.verifyCustomerAccount.message}
  //   </h1>
  // );
};

export default AccountVerifyPage;