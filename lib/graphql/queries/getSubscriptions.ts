export const getSubscriptionsQuery = /* GraphQL */ `
  query getSubscriptions {
    getSubscriptions {
      ... on SubscriptionsList {
        items {
          ... on Subscriptions {
            id
            price
            category
            type
          }
        }
      }
    }
  }
`;
