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
            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity;
            } else {
                console.error("There was an error with your product")
            }
        },
        removeExistingProduct: (state, action) => {
            const existingProduct =  state.cartContent.find((prod) => prod.id === action.payload.id)
            if (existingProduct) {
                existingProduct.quantity -= action.payload.quantity;
            } else {
                console.error("There was an error with your product")
            }
        },

        removeProduct: (state, action) => {
            console.log('removed')
            state.cartContent = state.cartContent.filter(
              (prod) => prod.id !== action.payload
            );
          }
    }
})

export const { addProduct, addExistingProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer