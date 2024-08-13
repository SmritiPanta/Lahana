export const signUpWithPhoneMutation = /* GraphQL */ `
mutation SignupWithPhone($input: SignUpUserInput!) {
    signupWithPhone(input: $input) {
        __typename
        ...on SignUpSuccess {
            message
        }
        ...on ErrorResult {
            message
        }
    }
}
`;