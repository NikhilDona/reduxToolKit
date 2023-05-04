import { createSlice } from "@reduxjs/toolkit"; 

const MyCartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addProductToMyCart(state,action){
            state.push(action.payload)
        }
    }
});

export const {addProductToMyCart} = MyCartSlice.actions;
export default MyCartSlice.reducer;