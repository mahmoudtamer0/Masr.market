import { createSlice } from "@reduxjs/toolkit";


const favSlice = createSlice({
    initialState: JSON.parse(localStorage.getItem("fav")) || [],
    name: "favSlice",
    reducers: {
        addProductTofav: (state, action) => {
            const productexist = state.find((prod) => prod.id === action.payload.id);
            if (productexist) {
                productexist.quantity += 1;
            } else {
                const cloneproduct = { ...action.payload, quantity: 1 }
                state.push(cloneproduct)
            }
        }, deletProductFav: (state, action) => {
            return state.filter((prod) => prod.id !== action.payload.id)
        }
    }
})


export const { addProductTofav, deletProductFav } = favSlice.actions

export default favSlice.reducer;