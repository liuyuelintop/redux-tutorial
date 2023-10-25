import { createSlice } from "@reduxjs/toolkit";

export const counterSlice3 = createSlice({
    name: 'counter3',
    initialState:{
        count3: 0,
    },
    reducers:{
        increment3: (state) =>{
            state.count3 +=1
        },
        decrement3: (state) =>{
            state.count3 -=1
        },
        reset3: (state) =>{
            state.count3 =0
        }
    },
})

export const {increment3, decrement3, reset3} = counterSlice3.actions

export default counterSlice3.reducer