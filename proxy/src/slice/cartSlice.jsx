import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:"cart",
    initialState:{
       items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        emptyCart:(state)=>{
            state.items=[]
        },
        removeItem:(state)=>{
            state.items.pop();
        }
    }

})

export const{addItem,removeItem,emptyCart}=cartSlice.actions

export default cartSlice.reducer 