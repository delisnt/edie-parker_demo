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
        },
        addExistingProduct: (state, action) => {
            const existingProduct =  state.cartContent.find((prod) => prod.id === action.payload.id)
            existingProduct.quantity += action.payload.quantity;
        }
    }
})

export const { addProduct, addExistingProduct } = cartSlice.actions;

export default cartSlice.reducer