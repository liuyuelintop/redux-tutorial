import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
import counterReducer2 from './counterSlice2'
import counterReducer3 from './counterSlice3'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    counter2: counterReducer2,
    counter3: counterReducer3,
    },
})