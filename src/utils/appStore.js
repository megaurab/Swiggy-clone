import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "./cartSlice";
import resReducers from "./restaurantSlice";

const appStore = configureStore({
    reducer:{
        cart:cartReducers,
        restaurants:resReducers,
    }
});

export default appStore;