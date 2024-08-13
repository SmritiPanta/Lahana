export type AllProductsType = {
  data: {
    products: {
      items: {
        id: number;
        name: string;
        slug: string;
        variants: {
          price?: number;
          id: number;
          options: {
            name: string;
          }[];
          customFields: {
            cutOffPrice: number;
          };
        }[];
        assets?: { source?: string }[];
        customFields: { saleProduct: boolean | null };
      }[];
    };
  };
};

export type SignupWithPhoneResponseType = {
  data: {
    signupWithPhone: {
      __typename: "SignUpSuccess" | "SignUpError" | "ErrorResult";
      message: string;
    };
  };
};

export type AuthenticateResponseType = {
  data: {
    authenticate: {
      __typename: "CurrentUser" | "InvalidCredentialsError";
      message: string;
    };
  };
};

export type VerifyOtpResponseType = {
  data: {
    verifyOtp: {
      __typename: "CurrentUser" | "VerifyOtpError";
      message: string;
    };
  };
};

export type logoutResponseType = {
  data: {
    logout: {
      __typename: "Success";
      success: boolean;
    };
  };
};

//  export type UpdateCustomerResponseType = {
//   data: {
//    updateCustomer: {
//      __typename: 'Customer';
//      message: string;
//    };
//   }
//  }

export type UpdateCustomerResponseType = {
  data: {
    updateCustomer:
      | {
          __typename: "Customer";
          firstName: string;
          lastName: string;
          phoneNumber?: string | null;
        }
      | {
          __typename: "Error";
          message: string;
        };
  };
};

export type BuySubscriptionResponseType = {
  data: {
    buySubscription: {
      __typename: "buySubscriptionResponse" | "MessageResponse";
      pidx: number;
      payment_url: string;
    };
  };
};

export type ActiveCustomerResponseType = {
  data: {
    activeCustomer: {
      id: string;
      firstName: string;
      lastName: string;
      emailAddress: string;
    };
  };
};

//  export type GetSubscriptionResponseType = {
//   data: {
//     getSubscriptions : {
//       items:{
//       id: string;
//       price: string;
//       category: string
//     }
//   }
//  }
// }
// export type Subscription = {
//   id: string;
//   price: string;
//   category: string;
//   type: string;
//   createdAt: string;
//   updatedAt: string;
// };
// Adjust the Subscription type to match your actual API response
export type Subscription = {
  id: string;
  type: string;
  price: string;
  category: string;
  products: {
    week: number;
    dayOfWeek: string;
    items: {
      name: string;
      description: string;
    }[];
  }[];
};

export type GetSubscriptionResponseType = {
  data: {
    getSubscriptions: {
      items: Subscription[];
    };
  };
};

export type GetOneSubscriptionResponseType = {
  data: {
    getonesubscription: {
      id: string;
      type: string;
      price: string;
      category: string;
      products: [
        {
          week: number;
          dayOfWeek: string;
          items: [
            {
              name: string;
              description: string;
            }
          ];
        }
      ];
    };
  };
};
