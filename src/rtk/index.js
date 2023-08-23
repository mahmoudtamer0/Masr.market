import cartSlice from "./reducers/cart-slice";
import { configureStore } from "@reduxjs/toolkit";
import favSlice from "./reducers/fav-slice";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        fav: favSlice,
    }
})