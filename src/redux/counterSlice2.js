import { createSlice } from "@reduxjs/toolkit";

export const counterSlice2 = createSlice({
    name: 'counter2',
    initialState: {
        count2: 0,
        test_count:0,
    },
    reducers: {
        increment2: (state)=>{
            state.count2 += 1
        },
        decrement2 :(state)=>{
            state.count2 -= 1
        },
        incrementByAmount2: (state, action)=>{
            state.count2 += action.payload
        },
        reset2: (state)=>{
            state.count2 = 0
        },
    }
})

export const {increment2, decrement2, incrementByAmount2, reset2} = counterSlice2.actions

export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
      dispatch(incrementByAmount2(amount))
    }, 1000)
  }


export const runIncrement2 = () => (dispatch) => {
    dispatch(increment2()); // 在这里使用 dispatch 调用 increment2
};

export default counterSlice2.reducer