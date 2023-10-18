import { useDispatch, useSelector } from 'react-redux';
import './App.css';
// import { decrement, increment, incrementByAmount, reset } from './redux/counterSlice';
import { decrement2, increment2, incrementByAmount2, reset2, incrementAsync, runIncrement2 } from './redux/counterSlice2';

function App() {
  // const {count} = useSelector((state)=>state.counter);
  const {count2} =useSelector(state => state.counter2);
  const dispatch = useDispatch();
  return (
    <div className="App">
    <h1>Redux Tutorial</h1>
    <h2>The count is : {count2}</h2>
    <button onClick={()=>dispatch(increment2())}>Increment</button>
    <button onClick={()=>dispatch(decrement2())}>Decrement</button>
    <button onClick={()=>dispatch(incrementByAmount2(33))}>Increase by 33</button>
    <button onClick={()=>dispatch(reset2())}>Reset</button>
    <button onClick={()=>dispatch(incrementAsync(1))}>IncrementAsync</button>
    <button onClick={()=>dispatch(runIncrement2())}>Run Increment</button>
    </div>
  );
}

export default App;
