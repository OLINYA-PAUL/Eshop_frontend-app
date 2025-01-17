// import { createReducer } from "@reduxjs/toolkit";

// const initialState = {
//   isLoading: true,
// };

// export const sellerReducer = createReducer(initialState, {
//   LoadSellerRequest: (state) => {
//     state.isLoading = true;
//   },
//   LoadSellerSuccess: (state, action) => {
//     state.isSeller = true;
//     state.isLoading = false;
//     state.seller = action.payload;
//   },
//   LoadSellerFail: (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//     state.isSeller = false;
//   },

//   // get all sellers ---admin
//   getAllSellersRequest: (state) => {
//     state.isLoading = true;
//   },
//   getAllSellersSuccess: (state, action) => {
//     state.isLoading = false;
//     state.sellers = action.payload;
//   },
//   getAllSellerFailed: (state, action) => {
//     state.isLoading = false;
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

export const sellerReducer = createReducer(initialState, (builder) => {
  // Load seller actions
  builder
    .addCase('LoadSellerRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('LoadSellerSuccess', (state, action) => {
      state.isSeller = true;
      state.isLoading = false;
      state.seller = action.payload;
    })
    .addCase('LoadSellerFail', (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isSeller = false;
    })

    // Get all sellers - Admin actions
    .addCase('getAllSellersRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('getAllSellersSuccess', (state, action) => {
      state.isLoading = false;
      state.sellers = action.payload;
    })
    .addCase('getAllSellerFailed', (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    
    // Clear errors action
    .addCase('clearErrors', (state) => {
      state.error = null;
    });
});
