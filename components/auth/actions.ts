'use server';

import { logout } from "@/lib/api/logout";





export const logoutAction = async () => {
  try {
    const {data} = await logout();
    console.log({data})
    if (data?.logout?.success) {
      return {
        success: true,
      };
    }

    return {
      success: false,
      message: 'Something went wrong. Please try again.',
    };
  } catch (e) {
    //
    // TODO: redirect to error page
    //
    return {
      success: false,
      message: 'Failed to logout. Please try again.',
    };
  }
};

// 'use server';

// import { logout } from "@/lib/api";
// import { logoutResponseType } from "@/lib/api/types";

// export const logoutAction = async () => {
//   try {
//     const data: logoutResponseType = await logout({}); // Assuming no specific input is needed
//     console.log(data)
//     if (data.data.logout.__typename === 'Success') {
//       return {
//         success: true,
//         message: data.data.logout.message,
//       };
//     }

//     return {
//       success: false,
//       message: 'Something went wrong. Please try again.',
//     };
//   } catch (e) {
//     // TODO: redirect to error page
//     return {
//       success: false,
//       message: 'Failed to logout. Please try again.',
//     };
//   }
// };
