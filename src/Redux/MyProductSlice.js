import { createSlice } from "@reduxjs/toolkit";

const MyProductSlice = createSlice({
    name:'product',
    initialState:[],
    reducers:{
        addMyProducts(state,action){
            state.push(action.payload);
        }
    }
});

export const {addMyProducts} = MyProductSlice.actions;
export default MyProductSlice.reducer;