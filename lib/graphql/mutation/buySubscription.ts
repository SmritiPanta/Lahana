

// export const buySubscriptionMutation = `
//   mutation BuySubscription($subscriptionId: Int!) {
//     buySubscription(subscriptionId: $subscriptionId) {
//       pidx
//       payment_url
//       expires_at
//       expires_in
//     }
//   }
// `;




export const buySubscriptionMutation = `
  mutation BuySubscription($subscriptionId: Int!) {
    buySubscription(subscriptionId: $subscriptionId) {
       __typename
    ... on buySubscriptionResponse {
      pidx
      payment_url
      expires_at
    }
    }
  }
`;