import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { buySubscription, getonesubscription } from "@/lib/api";
import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { getonesubscriptionsQuery } from "@/lib/graphql/queries/getonesubscription";

interface SubscriptionDetailsProps {
  subscriptionId: number;
}

interface ProductItem {
  name: string;
  description: string;
}

interface Product {
  week: number;
  dayOfWeek: string;
  items: ProductItem[];
}

interface SubscriptionData {
  id: string;
  type: string;
  price: string;
  category: string;
  products: Product[];
}

const SubscriptionDetails: React.FC<SubscriptionDetailsProps> = ({
  subscriptionId,
}) => {
  const [subscriptionData, setSubscriptionData] =
    useState<SubscriptionData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedDay, setSelectedDay] = useState<Product | null>(null); // State to store selected day details

  const router = useRouter();

  const handleBuySubscription = async (subscriptionId: number) => {
    try {
      const { data } = await buySubscription(subscriptionId);
      if (data.buySubscription.__typename !== "buySubscriptionResponse") {
        throw new Error("Cannot buy Subscription right now");
      }
      if (data.buySubscription?.payment_url) {
        window.location.href = data.buySubscription.payment_url;
      }
      setError(null);
    } catch (error) {
      console.error("Error buying subscription:", error);
      setError("Error buying subscription. Please try again.");
    }
  };

  // const fetchSubscription = async (subscriptionId: number) => {
  //   try {
  //     const { data } = await getonesubscription(subscriptionId);
  //     console.log("API Response:", data);

  //     if (data?.getonesubscription) {
  //       setSubscriptionData(data.getonesubscription);
  //       if (data.getonesubscription.products.length > 0) {
  //         setSelectedDay(data.getonesubscription.products[0]);
  //       }
  //     } else {
  //       throw new Error("Unexpected data format");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching subscription details:", error);
  //     setError("Error fetching subscription details. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   if (subscriptionId) {
  //     fetchSubscription(subscriptionId);
  //   }
  // }, [subscriptionId]);

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const query = `
          query getSubscriptionDetails($subscriptionId: Int!) {
            getOneSubscriptions(subscriptionId: $subscriptionId) {
              id
              type
              price
              category
              products {
                week
                dayOfWeek
                items {
                  name
                  description
                }
              }
            }
          }
        `;

        const response = await fetch(
          "https://newa-lahana.hyperce.io/shop-api",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              query,
              variables: { subscriptionId },
            }),
          }
        );

        const result = await response.json();
        console.log(result); // Log result to debug

        if (result.errors) {
          setError(result.errors[0].message);
          setLoading(false);
          return;
        }

        const { data } = result;
        setSubscriptionData(data.getOneSubscriptions);

        // Set the first day by default
        if (data.getOneSubscriptions.products.length > 0) {
          setSelectedDay(data.getOneSubscriptions.products[0]);
        }
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchSubscription();
  }, [subscriptionId]);

  const handleCheckout = () => {
    // Navigate to the checkout page or handle checkout logic here
    router.push("/checkout"); // Example route to checkout page
  };

  const handleDayClick = (day: Product) => {
    setSelectedDay(day);
  };

  if (loading)
    return <p className="text-center text-lg text-gray-600">Loading...</p>;
  if (error)
    return <p className="text-center text-lg text-red-600">Error: {error}</p>;

  const groupedProducts = subscriptionData?.products.reduce((acc: { [key: number]: Product[] }, product) => {
    if (!acc[product.week]) {
      acc[product.week] = [];
    }
    acc[product.week].push(product);
    return acc;
  }, {});


  return (
    <div className=" ">
      <h1 className="text-3xl flex justify-start font-bold text-[#EE2916]  ml-24 mt-8">
        Subscription Details
      </h1>

      <div className="bg-[#fff998]  rounded-xl p-6 mt-4 ml-4 max-w-xl">
        <h2 className="text-2xl font-semibold text-black mb-2">
          Subscription Type: {subscriptionData?.type}
        </h2>
        <p className="text-lg text-black">
          Price: <span className="font-bold">${subscriptionData?.price}</span>
        </p>
        <p className="text-lg text-black">
          Category: {subscriptionData?.category}
        </p>
      </div>

      <h2 className="text-2xl flex justify-center font-bold mt-5  text-black mb-2">
        Weekly Details:
      </h2>
      {/* <FaChevronLeft /> */}
      <div className="flex flex-row gap-2 mb-4 overflow-y-auto">
        {subscriptionData?.products.map((product) => (
          <Button
            key={`${product.week}-${product.dayOfWeek}`}
            type="button"
            onClick={() => handleDayClick(product)}
            className="bg-[#EE2916] mt-4 text-white p-2 rounded hover:bg-pink-300 transition duration-300"
          >
            {product.dayOfWeek}   
            <FaChevronRight />
          </Button>
        ))}
      </div>

      {selectedDay && (
        <div className="bg-white shadow-md rounded-lg p-6 mt-6">
          <h3 className="text-2xl font-bold text-black  mb-2">
            Details for {selectedDay.dayOfWeek}
          </h3>
          <div className=" flex flex-row">
            <Image
              src={"/newa1.jpg"}
              objectFit="contain"
              alt={"Subscription Details"}
              width="400"
              height="200"
              className="bg-mint rounded-xl mt-3 text-mint h-[40vh] mb-4"
            />

            {selectedDay.items.length > 0 ? (
              <ul className="list-disc pl-5">
                {selectedDay.items.map((item, index) => (
                  <li
                    key={index}
                    className="container bg-[#fff998] rounded-2xl mt-3 mx-auto p-6 max-w-2xl text-black"
                  >
                    <strong className="font-semibold text-black text-2xl">
                      {item.name}:
                    </strong>
                    {item.description}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-black">No items available for this day.</p>
            )}
          </div>
        </div>
      )}
      <div className="flex justify-end">
        <Button
          type="button"
          onClick={() => handleBuySubscription(subscriptionId)}
          className="mt-6 flex h-[50px] w-[180px] items-center  rounded-xl border bg-[#EE2916] p-2 px-4 text-lg font-bold text-white hover:bg-[#d12a1b] transition duration-300"
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default SubscriptionDetails;
