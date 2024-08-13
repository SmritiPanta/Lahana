  export const verifyOtpMutation = /* GraphQL */ `
  mutation VerifyOtp($input: PhoneOtp!) {
    verifyOtp(input: $input) {
      __typename
      ... on CurrentUser{
      id}
      ... on ErrorResult{
      message}
    }
  }
  `