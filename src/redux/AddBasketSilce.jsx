import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  basket: JSON.parse(localStorage.getItem("bas")) || [],
};

export const addBasketSilce = createSlice({
  name: "ADD_TO_BASKET",
  initialState,
  reducers: {
    addBasket(state, action) {
      let findBas = state.basket.find((el) => el.id === action.payload.id);
      if (findBas) {
        console.log("bar");
      } else {
        localStorage.setItem(
          "bas",
          JSON.stringify([...state.basket, action.payload])
        );
        state.basket = [...state.basket, action.payload];
      }
    },
    deleteBasket(state, action) {
      let deleteProduct = state.basket.filter(
        (el) => el.id !== action.payload.id
      );
      localStorage.setItem("bas", JSON.stringify(deleteProduct));
      state.basket = deleteProduct;
    },
  },
});

export const { addBasket, deleteBasket } = addBasketSilce.actions;
export default addBasketSilce.reducer;
