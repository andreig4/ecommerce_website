import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalCartItems: 0,
    cartItems: [],
    totalCartValue: 0,
  },

  reducers: {
    addCartItemsNumber: (state, action) => {
      state.totalCartItems += action.payload;
    },

    addItemsToCart: (state, action) => {
      const existingItem = state.cartItems?.find(
        (item) =>
          item.id === action.payload.id && item.car === action.payload.car
      );

      if (existingItem) {
        existingItem.amount += action.payload.amount;
        state.totalCartValue += action.payload.amount * action.payload.price;
      } else {
        state.cartItems.push(action.payload);
        state.totalCartValue += action.payload.amount * action.payload.price;
      }
    },

    deleteItemFromCart: (state, action) => {
      const existingItem = state.cartItems?.find(
        (item) =>
          item.id === action.payload.id && item.car === action.payload.car
      );

      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === existingItem.id
      );
      state.cartItems.splice(itemIndex, 1);
      state.totalCartItems -= existingItem.amount;
      state.totalCartValue -= existingItem.price * existingItem.amount;
    },

    decreaseCartProductAmount: (state, action) => {
      const existingItem = state.cartItems?.find(
        (item) =>
          item.id === action.payload.id && item.car === action.payload.car
      );

      if (existingItem.amount > 1) {
        existingItem.amount--;
        state.totalCartItems--;
        state.totalCartValue -= existingItem.price;
      } else {
        const itemIndex = state.cartItems.findIndex(
          (item) => item.id === existingItem.id
        );
        state.cartItems.splice(itemIndex, 1);
        state.totalCartItems--;
        state.totalCartValue -= existingItem.price;
      }
    },

    increaseCartProductAmount: (state, action) => {
      const existingItem = state.cartItems?.find(
        (item) =>
          item.id === action.payload.id && item.car === action.payload.car
      );

      existingItem.amount++;
      state.totalCartItems++;
      state.totalCartValue += existingItem.price;
    },
  },
});

export const {
  addCartItemsNumber,
  addItemsToCart,
  deleteItemFromCart,
  decreaseCartProductAmount,
  increaseCartProductAmount,
} = cartSlice.actions;

export const selectTotalCartItems = (state) => state.cart.totalCartItems;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectTotalCarValue = (state) => state.cart.totalCartValue;

export default cartSlice.reducer;
