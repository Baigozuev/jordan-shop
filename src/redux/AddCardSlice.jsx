import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
  sale: [],
  details: {},
  searchProduct: [],
  man: [],
  woman: [],
  kids: [],
};

export const addCardSlice = createSlice({
  name: "ADD_PRODUCT",
  initialState,
  reducers: {
    addProduct(state, action) {
      localStorage.setItem(
        "product",
        JSON.stringify([...state.product, action.payload])
      );
      state.product = [...state.product, action.payload];
    },
    saleProduct(state, action) {
      let filterPrice = state.product.filter((el) => el.price > 200);
      state.sale = filterPrice.map((el) => {
        return {
          ...el,
          oldPrice: el.price,
          price: el.price - (el.price / 100) * 10,
        };
      });
    },
    productDeatils(state, action) {
      state.details = action.payload;
    },

    searchPro(state, action) {
      let filterSearch = state.product.filter(
        (el) => el.title === action.payload
      );
      state.searchProduct = filterSearch;
    },
    categoryMan(state, action) {
      state.man = state.product.filter((el) => (el.category === "man"));
    },
    categoryWoman(state, action) {
      state.woman = state.product.filter((el) => (el.category === "woman"));
    },
    categoryKids(state, action) {
      state.kids = state.product.filter((el) => (el.category === "kids"));
    },
    productExpensive(state,action) {
      state.product = state.product.filter((el) => el.title === action.payload.title)
    }
  },
});
export const {
  addProduct,
  saleProduct,
  productDeatils,
  searchPro,
  categoryMan,
  categoryWoman,
  categoryKids,
} = addCardSlice.actions;
export default addCardSlice.reducer;
