"use client";

// // import { useEffect, useState } from 'react';
// // import { useTransition } from 'react';
// // import { GoDash } from "react-icons/go";
// // import { Button } from '@/components/ui/button';
// // import {
// //   Card,
// //   CardContent,
// //   CardFooter,
// //   CardHeader,
// //   CardTitle,
// // } from '@/components/ui/card';
// // import { Loader } from '@/components/icons/loader';
// // import { getSubscriptions, buySubscription } from '@/lib/api';
// // import { Subscription } from '@/lib/api/types';

// // import { PiKeyholeFill } from "react-icons/pi";
// // import { SiTicktick } from "react-icons/si";

// // type SubscriptionInformationFormProps = {
// //   className?: string;
// //   items: Subscription[];
// // };

// // export const SubscriptionInformationForm = ({ className = undefined, items }: SubscriptionInformationFormProps) => {
// //   const [subscriptions, setSubscriptions] = useState<Subscription[]>(items);
// //   const [isPending, startTransition] = useTransition();
// //   const [error, setError] = useState<string | null>(null);

// //   const fetchSubscriptions = async () => {
// //     startTransition(async () => {
// //       try {
// //         const { data } = await getSubscriptions();
// //         setSubscriptions(data.getSubscriptions.items);
// //         setError(null);
// //       } catch (error) {
// //         console.error('Error fetching subscriptions:', error);
// //         setError('Error fetching subscriptions. Please try again.');
// //       }
// //     });
// //   };

// //   useEffect(() => {
// //     fetchSubscriptions();
// //   }, []);

// //   const handleBuySubscription = async (subscriptionId: string) => {
// //     try {
// //       const { data } = await buySubscription(Number(subscriptionId));
// //       if (data.buySubscription.__typename !== 'buySubscriptionResponse') {
// //         throw new Error('Cannot buy Subscription right now');
// //       }
// //       if (data.buySubscription?.payment_url) {
// //         window.location.href = data.buySubscription.payment_url;
// //       }
// //       setError(null);
// //     } catch (error) {
// //       console.error('Error buying subscription:', error);
// //       setError('Error buying subscription. Please try again.');
// //     }
// //   };

// //   return (
// //     <div className="mb-3 mt-5 py-6">
// //       <h1 className="font1 flex justify-center px-4 text-4xl font-semibold text-[#EE2916]">
// //         Subscription Plan
// //       </h1>
// //       <h2 className="stylefont flex justify-center pt-5 text-3xl font-bold text-[#0c0404]">
// //         <div className="-ml-1 -mt-5 text-7xl">
// //           <GoDash />
// //         </div>
// //         Choose the right plan for you
// //         <div className="-ml-1 -mt-5 text-7xl">
// //           <GoDash />
// //         </div>
// //       </h2>
// //       {error && <p className="text-red-600">{error}</p>}
// //       {isPending ? (
// //         <Loader className="size-4 animate-spin" />
// //       ) : (
// //         <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center px-4 md:px-10 lg:px-20">
// //           {subscriptions.map((subscription) => (
// //             <div key={subscription.id} className="flex flex-col h-auto w-full justify-between rounded-xl p-4 shadow-2xl">
// //               <div className="flex flex-col">
// //                 <h2 className="my-2 py-2 flex gap-4 text-2xl md:text-3xl font-bold text-black">
// //                   <PiKeyholeFill className="text-[#EE2916]" />
// //                   {subscription.category} Plan
// //                 </h2>
// //                 <h2 className="my-2 flex gap-3 text-base md:text-lg font-semibold text-black">
// //                   <SiTicktick className="rounded-xl text-xl text-[#EE2916]" />
// //                   {subscription.type}
// //                 </h2>
// //                 <h2 className="my-2 flex gap-3 text-base md:text-lg font-bold text-black">
// //                   <SiTicktick className="rounded-xl text-xl text-[#EE2916]" />
// //                   Rs {subscription.price}
// //                 </h2>
// //                 <Button
// //                   type="button"
// //                   onClick={() => handleBuySubscription(subscription.id)}
// //                   disabled={isPending}
// //                   className="mt-3 flex h-[50px] w-[180px] items-center  rounded-xl border bg-[#EE2916] p-2 px-4 text-lg font-bold text-white"
// //                 >
// //                   Buy Subscription
// //                 </Button>

// //                 <Button
// //                   type="button"

// //                   className="mt-3 flex h-[50px] w-[180px] items-center  rounded-xl border bg-[#EE2916] p-2 px-4 text-lg font-bold text-white"
// //                 >
// //                  View more options
// //                 </Button>
// //               </div>
// //               <div className="flex items-center w-full md:w-auto mt-8 md:mt-0">
// //                 <img
// //                   src={"/nonveg.JPG"}
// //                   alt={`${subscription.category} Plan`}
// //                   className="h-[30vh] w-[50vw] md:w-[50vh] rounded-xl object-cover mt-5"
// //                 />
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //       {/* <div className="flex justify-center mt-6">
// //         <Button type="button" onClick={fetchSubscriptions} disabled={isPending} className="bg-blue-500 text-white px-4 py-2 rounded-md">
// //           Refresh
// //         </Button>
// //       </div> */}
// //     </div>
// //   );
// // };
// import { useEffect, useState } from 'react';
// import { useTransition } from 'react';
// import { GoDash } from "react-icons/go";
// import { Button } from '@/components/ui/button';
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card';
// import { Loader } from '@/components/icons/loader';
// import { getSubscriptions, buySubscription,  getonesubscription } from '@/lib/api';
// import { Subscription } from '@/lib/api/types';

// import { PiKeyholeFill } from "react-icons/pi";
// import { SiTicktick } from "react-icons/si";
// import Link from 'next/link';

// type SubscriptionInformationFormProps = {
//   className?: string;
//   items: Subscription[];
// };

// export const SubscriptionInformationForm = ({ className = undefined, items }: SubscriptionInformationFormProps) => {
//   const [subscriptions, setSubscriptions] = useState<Subscription[]>(items);
//   const [selectedSubscription, setSelectedSubscription] = useState<Subscription | null>(null);
//   const [isPending, startTransition] = useTransition();
//   const [error, setError] = useState<string | null>(null);

//   const fetchSubscriptions = async () => {
//     startTransition(async () => {
//       try {
//         const { data } = await getSubscriptions();
//         setSubscriptions(data.getSubscriptions.items);
//         setError(null);
//       } catch (error) {
//         console.error('Error fetching subscriptions:', error);
//         setError('Error fetching subscriptions. Please try again.');
//       }
//     });
//   };

//   const handleBuySubscription = async (subscriptionId: string) => {
//     try {
//       const { data } = await buySubscription(Number(subscriptionId));
//       if (data.buySubscription.__typename !== 'buySubscriptionResponse') {
//         throw new Error('Cannot buy Subscription right now');
//       }
//       if (data.buySubscription?.payment_url) {
//         window.location.href = data.buySubscription.payment_url;
//       }
//       setError(null);
//     } catch (error) {
//       console.error('Error buying subscription:', error);
//       setError('Error buying subscription. Please try again.');
//     }
//   };

//   return (
//     <div className="mb-3 mt-5 py-6">
//       <h1 className="font1 flex justify-center px-4 text-4xl font-semibold text-[#EE2916]">
//         Subscription Plan
//       </h1>
//       <h2 className="stylefont flex justify-center pt-5 text-3xl font-bold text-[#0c0404]">
//         <div className="-ml-1 -mt-5 text-7xl">
//           <GoDash />
//         </div>
//         Choose the right plan for you
//         <div className="-ml-1 -mt-5 text-7xl">
//           <GoDash />
//         </div>
//       </h2>
//       {error && <p className="text-red-600">{error}</p>}
//       {isPending ? (
//         <Loader className="size-4 animate-spin" />
//       ) : (
//         <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center px-4 md:px-10 lg:px-20">
//           {subscriptions.map((subscription) => (
//             <div key={subscription.id} className="flex flex-col h-auto w-full justify-between rounded-xl p-4 shadow-2xl">
//               <div className="flex flex-col">
//                 <h2 className="my-2 py-2 flex gap-4 text-2xl md:text-3xl font-bold text-black">
//                   <PiKeyholeFill className="text-[#EE2916]" />
//                   {subscription.category} Plan
//                 </h2>
//                 <h2 className="my-2 flex gap-3 text-base md:text-lg font-semibold text-black">
//                   <SiTicktick className="rounded-xl text-xl text-[#EE2916]" />
//                   {subscription.type}
//                 </h2>
//                 <h2 className="my-2 flex gap-3 text-base md:text-lg font-bold text-black">
//                   <SiTicktick className="rounded-xl text-xl text-[#EE2916]" />
//                   Rs {subscription.price}
//                 </h2>
//                 {/* <Button
//                   type="button"
//                   onClick={() => handleBuySubscription(subscription.id)}
//                   disabled={isPending}
//                   className="mt-3 flex h-[50px] w-[180px] items-center  rounded-xl border bg-[#EE2916] p-2 px-4 text-lg font-bold text-white"
//                 >
//                   Buy Subscription
//                 </Button> */}

// <Link
//         href={`/subscription/${subscriptionId}`}
//         className="mt-6 flex h-[50px] w-[230px] items-center justify-center rounded-xl border bg-[#640d14] p-2 px-4 text-xl font-bold text-white hover:bg-[#8e2b3c] transition duration-300"
//       >
//         Subscribe Now
//       </Link>
//               </div>
//               <div className="flex items-center w-full md:w-auto mt-8 md:mt-0">
//                 <img
//                   src={"/nonveg.JPG"}
//                   alt={`${subscription.category} Plan`}
//                   className="h-[30vh] w-[50vw] md:w-[50vh] rounded-xl object-cover mt-5"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//       {selectedSubscription && (
//         <div className="mt-10 p-6 bg-white rounded-lg shadow-lg">
//           <h2 className="text-2xl font-bold">{selectedSubscription.category} - {selectedSubscription.type}</h2>
//           <p className="text-lg">Price: Rs {selectedSubscription.price}</p>
//           {selectedSubscription.products.map((product, index) => (
//             <div key={index} className="mt-4">
//               <h3 className="text-xl font-semibold">Week {product.week} - {product.dayOfWeek}</h3>
//               <ul className="mt-2 list-disc pl-5">
//                 {product.items.map((item, idx) => (
//                   <li key={idx}>
//                     <strong>{item.name}:</strong> {item.description}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };
import { useEffect, useState } from "react";
import { useTransition } from "react";
import { GoDash } from "react-icons/go";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/icons/loader";
import { getSubscriptions, buySubscription, activeCustomer } from "@/lib/api";
import { Subscription } from "@/lib/api/types";
import { PiKeyholeFill } from "react-icons/pi";
import { SiTicktick } from "react-icons/si";
import Link from "next/link";

type SubscriptionInformationFormProps = {
  className?: string;
  items: Subscription[];
};

type ActiveCustomerData = {
  activeCustomer: {
    id: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
  } | null;
};

export const SubscriptionInformationForm = ({
  className = undefined,
  items,
}: SubscriptionInformationFormProps) => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>(items);
  const [selectedSubscription, setSelectedSubscription] =
    useState<Subscription | null>(null);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [activeCustomerData, setActiveCustomerData] =
    useState<ActiveCustomerData | null>(null);

  useEffect(() => {
    const fetchActiveCustomer = async () => {
      try {
        const { data } = await activeCustomer();
        setActiveCustomerData(data);
      } catch (error) {
        console.error("Error fetching active customer:", error);
        setError("Error fetching active customer status. Please try again.");
      }
    };

    fetchActiveCustomer();
  }, []);

  return (
    <div className="mb-3 mt-5 py-6">
      <h1 className="font1 flex justify-center px-4 text-4xl font-semibold text-[#EE2916]">
        Subscription Plan
      </h1>
      <h2 className="stylefont flex justify-center pt-5 text-3xl font-bold text-[#0c0404]">
        <div className="-ml-1 -mt-5 text-7xl">
          <GoDash />
        </div>
        Choose the right plan for you
        <div className="-ml-1 -mt-5 text-7xl">
          <GoDash />
        </div>
      </h2>
      {error && <p className="text-red-600">{error}</p>}
      {isPending ? (
        <Loader className="size-4 animate-spin" />
      ) : (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center px-4 md:px-10 lg:px-20">
          {subscriptions.map((subscription) => (
            <div
              key={subscription.id}
              className="flex flex-col h-auto w-full justify-between rounded-xl p-4 shadow-2xl"
            >
              <div className="flex flex-col">
                <h2 className="my-2 py-2 flex gap-4 text-2xl md:text-3xl font-bold text-black">
                  <PiKeyholeFill className="text-[#EE2916]" />
                  {subscription.category} Plan
                </h2>
                <h2 className="my-2 flex gap-3 text-base md:text-lg font-semibold text-black">
                  <SiTicktick className="rounded-xl text-xl text-[#EE2916]" />
                  {subscription.type}
                </h2>
                <h2 className="my-2 flex gap-3 text-base md:text-lg font-bold text-black">
                  <SiTicktick className="rounded-xl text-xl text-[#EE2916]" />
                  Rs {subscription.price}
                </h2>
                <div className="flex items-center justify-center w-full md:w-auto mt-8 md:mt-0">
                  <img
                    src={"/nonveg.JPG"}
                    alt={`${subscription.category} Plan`}
                    className="h-[30vh] w-[50vw] md:w-[50vh] rounded-xl object-cover mt-5"
                  />
                </div>
                {activeCustomerData?.activeCustomer ? (
                  <div className="flex  justify-center">
                    <Link
                      href={`/subscription/${subscription.id}`}
                      className="mt-6 flex h-[50px] w-[230px]  justify-center rounded-xl border bg-[#EE2916] p-2 px-4 text-xl font-bold text-white hover:bg-[#8e2b3c] transition duration-300"
                    >
                      Subscribe Now
                    </Link>
                  </div>
                ) : (
                  <div className="flex  justify-center">
                  <Link
                    href="/login"
                    className="mt-6 flex h-[50px] w-[230px] items-center justify-center rounded-xl border bg-[#EE2916] p-2 px-4 text-xl font-bold text-white hover:bg-[#8e2b3c] transition duration-300"
                  >
                    Subscribe Now
                  </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      {selectedSubscription && (
        <div className="mt-10 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">
            {selectedSubscription.category} - {selectedSubscription.type}
          </h2>
          <p className="text-lg">Price: Rs {selectedSubscription.price}</p>
          {selectedSubscription.products.map((product, index) => (
            <div key={index} className="mt-4">
              <h3 className="text-xl font-semibold">
                Week {product.week} - {product.dayOfWeek}
              </h3>
              <ul className="mt-2 list-disc pl-5">
                {product.items.map((item, idx) => (
                  <li key={idx}>
                    <strong>{item.name}:</strong> {item.description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
