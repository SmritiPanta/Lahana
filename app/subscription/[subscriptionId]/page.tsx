// import SubscriptionDetails from "@/components/SubscriptionDetails";
// import { useRouter } from "next/router";

// const SubscriptionPage = () => {
//   const router = useRouter();
//   const { subscriptionId } = router.query;

//   if (!subscriptionId) return <p>Loading...</p>;

//   // Handle the case where subscriptionId could be an array
//   const subscriptionIdStr = Array.isArray(subscriptionId) ? subscriptionId[0] : subscriptionId;

//   return (
//     <div>
//       <SubscriptionDetails subscriptionId={parseInt(subscriptionIdStr, 10)} />
//     </div>
//   );
// };

// export default SubscriptionPage;
'use client'
import { useParams } from "next/navigation";
import SubscriptionDetails from "@/components/SubscriptionDetails";

const SubscriptionPage = () => {
  const { subscriptionId } = useParams();

  if (!subscriptionId) return <p>Loading...</p>;

  return (
    <div>
      
      <SubscriptionDetails subscriptionId={parseInt(subscriptionId as string, 10)} />
    </div>
  );
};

export default SubscriptionPage;

