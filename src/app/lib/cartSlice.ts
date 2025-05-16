import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartContent: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            console.log("Adding")
            state.cartContent = [...state.cartContent, action.payload]
        }
    }
})

export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer