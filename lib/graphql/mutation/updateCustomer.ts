

  export const updateCustomerMutation = /* GraphQL */ `
mutation UpdateCustomer($input: UpdateCustomerInput!) {
    updateCustomer(input: $input) {
      __typename
      ... on Customer {
        firstName
        lastName
        phoneNumber
      }
      ... on Error {
        message
      }
    }
  }
`;