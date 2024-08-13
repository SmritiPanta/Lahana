export const authenticateMutation = /* GraphQL */ `
mutation Authenticate($input: AuthenticationInput!) {
  authenticate(input: $input) {
    __typename
    ...on ErrorResult {
      message
    }
    ...on CurrentUser {
      identifier
    }
  }
}
`;
