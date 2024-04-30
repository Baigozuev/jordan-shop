import { configureStore } from "@reduxjs/toolkit";
import AddCardSlice from "./AddCardSlice";
import AddBasketSilce from "./AddBasketSilce";
import AddFovaritSilece from "./AddFovaritSilece";
import AddManSlice from "./AddManSlice";
import DarkModSlice from "./DarkModSlice";

export const store = configureStore({
  reducer: {
    addCard: AddCardSlice,
    addBasket: AddBasketSilce,
    addFovarit : AddFovaritSilece,
    addMan : AddManSlice,
    isDone : DarkModSlice
  },
});
