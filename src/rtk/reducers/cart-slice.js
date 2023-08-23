import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    initialState: JSON.parse(localStorage.getItem("cart")) || [],
    name: "cartSlice",
    reducers: {
        addprod: (state, action) => {
            const productexist = state.find((prod) => prod.id === action.payload.id);
            if (productexist) {
                productexist.quantity += 1;
            } else {
                const cloneproduct = { ...action.payload, quantity: 1 }
                state.push(cloneproduct)
            }
        }, deletprod: (state, action) => {
            return state.filter((prod) => prod.id !== action.payload)
        }, handledecproducts: (state, action) => {
            const productexist = state.find((prod) => prod.id === action.payload.id);
            if (productexist.quantity > 1) {
                productexist.quantity -= 1;
            }
        }
    }
})


export const { addprod, deletprod, handledecproducts } = cartSlice.actions

export default cartSlice.reducer;