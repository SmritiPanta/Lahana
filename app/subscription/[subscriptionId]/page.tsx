
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

