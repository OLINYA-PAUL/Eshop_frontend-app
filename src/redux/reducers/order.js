// import { createReducer } from "@reduxjs/toolkit";

// const initialState = {
//   isLoading: true,
// };

// export const orderReducer = createReducer(initialState, {
//   // get all orders of user
//   getAllOrdersUserRequest: (state) => {
//     state.isLoading = true;
//   },
//   getAllOrdersUserSuccess: (state, action) => {
//     state.isLoading = false;
//     state.orders = action.payload;
//   },
//   getAllOrdersUserFailed: (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//   },
  
//   // get all orders of shop
//   getAllOrdersShopRequest: (state) => {
//     state.isLoading = true;
//   },
//   getAllOrdersShopSuccess: (state, action) => {
//     state.isLoading = false;
//     state.orders = action.payload;
//   },
//   getAllOrdersShopFailed: (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//   },

//   // get all orders for admin
//   adminAllOrdersRequest: (state) => {
//     state.adminOrderLoading = true;
//   },
//   adminAllOrdersSuccess: (state, action) => {
//     state.adminOrderLoading = false;
//     state.adminOrders = action.payload;
//   },
//   adminAllOrdersFailed: (state, action) => {
//     state.adminOrderLoading = false;
//     state.error = action.payload;
//   },

//   clearErrors: (state) => {
//     state.error = null;
//   },
// });

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const orderReducer = createReducer(initialState, (builder) => {
  // Get all orders of user actions
  builder
    .addCase('getAllOrdersUserRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('getAllOrdersUserSuccess', (state, action) => {
      state.isLoading = false;
      state.orders = action.payload;
    })
    .addCase('getAllOrdersUserFailed', (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

    // Get all orders of shop actions
    .addCase('getAllOrdersShopRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('getAllOrdersShopSuccess', (state, action) => {
      state.isLoading = false;
      state.orders = action.payload;
    })
    .addCase('getAllOrdersShopFailed', (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

    // Get all orders for admin actions
    .addCase('adminAllOrdersRequest', (state) => {
      state.adminOrderLoading = true;
    })
    .addCase('adminAllOrdersSuccess', (state, action) => {
      state.adminOrderLoading = false;
      state.adminOrders = action.payload;
    })
    .addCase('adminAllOrdersFailed', (state, action) => {
      state.adminOrderLoading = false;
      state.error = action.payload;
    })

    // Clear errors action
    .addCase('clearErrors', (state) => {
      state.error = null;
    });
});
