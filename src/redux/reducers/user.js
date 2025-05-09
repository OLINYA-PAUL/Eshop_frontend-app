// import { createReducer } from "@reduxjs/toolkit";

// const initialState = {
//   isAuthenticated: false,
// };

// export const userReducer = createReducer(initialState, {
//   LoadUserRequest: (state) => {
//     state.loading = true;
//   },
//   LoadUserSuccess: (state, action) => {
//     state.isAuthenticated = true;
//     state.loading = false;
//     state.user = action.payload;
//   },
//   LoadUserFail: (state, action) => {
//     state.loading = false;
//     state.error = action.payload;
//     state.isAuthenticated = false;
//   },

//   // update user information
//   updateUserInfoRequest: (state) => {
//     state.loading = true;
//   },
//   updateUserInfoSuccess: (state, action) => {
//     state.loading = false;
//     state.user = action.payload;
//   },
//   updateUserInfoFailed: (state, action) => {
//     state.loading = false;
//     state.error = action.payload;
//   },

//   // update user address
//   updateUserAddressRequest: (state) => {
//     state.addressloading = true;
//   },
//   updateUserAddressSuccess: (state, action) => {
//     state.addressloading = false;
//     state.successMessage = action.payload.successMessage;
//     state.user = action.payload.user;
//   },
//   updateUserAddressFailed: (state, action) => {
//     state.addressloading = false;
//     state.error = action.payload;
//   },

//   // delete user address
//   deleteUserAddressRequest: (state) => {
//     state.addressloading = true;
//   },
//   deleteUserAddressSuccess: (state, action) => {
//     state.addressloading = false;
//     state.successMessage = action.payload.successMessage;
//     state.user = action.payload.user;
//   },
//   deleteUserAddressFailed: (state, action) => {
//     state.addressloading = false;
//     state.error = action.payload;
//   },

//   // get all users --- admin
//   getAllUsersRequest: (state) => {
//     state.usersLoading = true;
//   },
//   getAllUsersSuccess: (state,action) => {
//     state.usersLoading = false;
//     state.users = action.payload;
//   },
//   getAllUsersFailed: (state,action) => {
//     state.usersLoading = false;
//     state.error = action.payload;
//   },
//   clearErrors: (state) => {
//     state.error = null;
//   },
//   clearMessages: (state) => {
//     state.successMessage = null;
//   },
// });

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  loading: false,
  error: null,
};

export const userReducer = createReducer(initialState, (builder) => {
  // Load user actions
  builder
    .addCase("LoadUserRequest", (state) => {
      state.loading = true;
    })
    .addCase("LoadUserSuccess", (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload;
    })
    .addCase("LoadUserFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    })

    // Update user information actions
    .addCase("updateUserInfoRequest", (state) => {
      state.loading = true;
    })
    .addCase("updateUserInfoSuccess", (state, action) => {
      state.loading = false;
      state.user = action.payload;
    })
    .addCase("updateUserInfoFailed", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    // Update user address actions
    .addCase("updateUserAddressRequest", (state) => {
      state.addressloading = true;
    })
    .addCase("updateUserAddressSuccess", (state, action) => {
      state.addressloading = false;
      state.successMessage = action.payload.successMessage;
      state.user = action.payload.user;
    })
    .addCase("updateUserAddressFailed", (state, action) => {
      state.addressloading = false;
      state.error = action.payload;
    })

    // Delete user address actions
    .addCase("deleteUserAddressRequest", (state) => {
      state.addressloading = true;
    })
    .addCase("deleteUserAddressSuccess", (state, action) => {
      state.addressloading = false;
      state.successMessage = action.payload.successMessage;
      state.user = action.payload.user;
    })
    .addCase("deleteUserAddressFailed", (state, action) => {
      state.addressloading = false;
      state.error = action.payload;
    })

    // Get all users - Admin actions
    .addCase("getAllUsersRequest", (state) => {
      state.usersLoading = true;
    })
    .addCase("getAllUsersSuccess", (state, action) => {
      state.usersLoading = false;
      state.users = action.payload;
    })
    .addCase("getAllUsersFailed", (state, action) => {
      state.usersLoading = false;
      state.error = action.payload;
    })

    // Clear errors and messages actions
    .addCase("clearErrors", (state) => {
      state.error = null;
    })
    .addCase("clearMessages", (state) => {
      state.successMessage = null;
    });
});
