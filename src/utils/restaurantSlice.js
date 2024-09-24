import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
    name:'restaurant',
    initialState:{
        restaurant:[]
    },
    reducers:{
        addRestaurant:(state,action)=>{
            state.restaurant.push(action.payload);
        }
    }
})

export const {addRestaurant} = restaurantSlice.actions;
export default restaurantSlice.reducer;