import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fovarit: JSON.parse(localStorage.getItem("fov")) || [],
};

export const addFovariteSlice = createSlice({
  name: "ADD_TO_FOVARIT",
  initialState,
  reducers: {
    addFovarit(state, action) {
let findFov = state.fovarit.find((el)=> el.id === action.payload.id)
if (findFov) {
state.fovarit = state.fovarit.filter((el) => el.id !== action.payload.id)
}else {

  localStorage.setItem("fov", JSON.stringify([...state.fovarit,action.payload]));
  state.fovarit = [...state.fovarit, action.payload];
}
    },

  },
});

export const {addFovarit} = addFovariteSlice.actions;
export default addFovariteSlice.reducer
