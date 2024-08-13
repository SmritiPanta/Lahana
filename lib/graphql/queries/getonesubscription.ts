// export const getonesubscriptionsQuery = /* GraphQL */ `
//   query getonesubscription {
//   getOneSubscriptions(subscriptionId: $subscriptionId) {
//     id
//     type
//     price
//     category
//     products {
//       week
//       dayOfWeek

//       items{
//         name
//         description
//       }
//     }
//   }
// }
export const getonesubscriptionsQuery = `
  query GetOneSubscription($subscriptionId: Int!) {
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
