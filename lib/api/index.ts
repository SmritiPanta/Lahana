import { authenticateMutation } from "../graphql/mutation/authenticate";
import { buySubscriptionMutation } from "../graphql/mutation/buySubscription";
import { logoutMutation } from "../graphql/mutation/logout";
import { signUpWithPhoneMutation } from "../graphql/mutation/signUpWithPhone";
import { updateCustomerMutation } from "../graphql/mutation/updateCustomer";
import { verifyOtpMutation } from "../graphql/mutation/verifyOtp";
import { activeCustomerQuery } from "../graphql/queries/activeCustomer";
import { allProductsQuery } from "../graphql/queries/allProducts";
import { getonesubscriptionsQuery } from "../graphql/queries/getonesubscription";
import { getSubscriptionsQuery } from "../graphql/queries/getSubscriptions";
import { fetcher } from "./fetcher";

import {
  ActiveCustomerResponseType,
  AllProductsType,
  AuthenticateResponseType,
  BuySubscriptionResponseType,
  GetOneSubscriptionResponseType,
  GetSubscriptionResponseType,
  SignupWithPhoneResponseType,
  UpdateCustomerResponseType,
  VerifyOtpResponseType,
} from "./types";

export const getAllProducts = async () => {
  const res = await fetcher<AllProductsType>({
    query: allProductsQuery,
    next: {
      revalidate: 15,
    },
  });

  return res.body;
};

export const signUpWithPhone = async (input: any) => {
  const res = await fetcher<SignupWithPhoneResponseType>({
    query: signUpWithPhoneMutation,
    variables: input,
  });
  return res.body;
};

export const authenticate = async (authenticateInput: {
  input: {
    phone: {
      phone: string;
      password: string;
    };
  };
  rememberMe: boolean | undefined;
}) => {
  const res = await fetcher<AuthenticateResponseType>({
    query: authenticateMutation,
    variables: authenticateInput as any,
  });
  return res.body;
};

export const verifyOtp = async (input: any) => {
  const res = await fetcher<VerifyOtpResponseType>({
    query: verifyOtpMutation,
    variables: input,
  });
  return res.body;
};

export const buySubscription = async (
  subscriptionId: number
): Promise<BuySubscriptionResponseType> => {
  const res = await fetcher<BuySubscriptionResponseType>({
    query: buySubscriptionMutation,
    variables: { subscriptionId } as any,
  });
  return res.body;
};

export const updateCustomer = async (input: any) => {
  const res = await fetcher<UpdateCustomerResponseType>({
    query: updateCustomerMutation,
    variables: input,
    cache: "no-store",
  });

  return res.body;
};
// Get current User
export const activeCustomer = async () => {
  // query banau
  const res = await fetcher<ActiveCustomerResponseType>({
    query: activeCustomerQuery,
    cache: "no-store",
  });
  return res.body;
};

// export const getSubscriptions = async () => {

//   const res = await fetcher<GetSubscriptionResponseType>({
//     query: getSubscriptionsQuery,
//     cache: "no-store",
//   });
//   return res.body;
// };

export const getSubscriptions =
  async (): Promise<GetSubscriptionResponseType> => {
    const res = await fetcher<GetSubscriptionResponseType>({
      query: getSubscriptionsQuery,
      cache: "no-store",
    });
    return res.body;
  };

export const getonesubscription =
  async (subscriptionId: number): Promise<GetOneSubscriptionResponseType> => {
    const res = await fetcher<GetOneSubscriptionResponseType>({
      query: getonesubscriptionsQuery,
      variables: { subscriptionId } as any,
      cache: "no-store",
    });
    return res.body;
  };
