import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    man: []
}


export const addManSlice = createSlice({
    name:"ADD_MAN",
    initialState,
    reducers : {
        addMan(state,action) {
            state.man = [...state.man, action.payload]
        }
    }
})


export const {addMan} = addManSlice.actions
export default addManSlice.reducer