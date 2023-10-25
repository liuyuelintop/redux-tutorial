import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment, incrementByAmount, reset } from './redux/counterSlice';
import {
  decrement2,
  increment2,
  incrementByAmount2,
  reset2,
  incrementAsync,
  runIncrement2,
} from "./redux/counterSlice2";

import { increment3, decrement3, reset3 } from "./redux/counterSlice3";
const Counter = () => {
  // const {count} = useSelector((state)=>state.counter);
  const { count2} = useSelector((state) => state.counter2);
  const {count3} =useSelector((state)=>state.counter3)
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Redux Tutorial</h1>
      <div>
      <h1>counterReducer2</h1>
      <h2>The count is : {count2}</h2>
      <button onClick={() => dispatch(increment2())}>Increment</button>
      <button onClick={() => dispatch(decrement2())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount2(33))}>
        Increase by 33
      </button>
      <button onClick={() => dispatch(reset2())}>Reset</button>
      <button onClick={() => dispatch(incrementAsync(1))}>
        IncrementAsync
      </button>
      <button onClick={() => dispatch(runIncrement2())}>Run Increment</button>
      </div>
      <div>
      <h1>counterReducer3</h1>
      <h2>The count is : {count3}</h2>
      <button onClick={() => dispatch(increment3())}>Increment</button>
      <button onClick={() => dispatch(decrement3())}>Decrement</button>
      <button onClick={() => dispatch(reset3())}>Reset</button>
      </div>
      
    </div>

    
  );
};

export default Counter;
