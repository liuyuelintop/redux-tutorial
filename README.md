# A simple Counter using Redux

This repository is designed to learn the basic usage of the Redux Toolkit.

Learning Materials:

[Redux Tutorial (with Redux Toolkit)](https://www.youtube.com/watch?v=iBUJVy8phqw&t=2s)

[Redux Toolkit Quick Start](https://redux-toolkit.js.org/tutorials/quick-start)

## Set Up

### Redux Toolkit and React-Redux

`npm install @reduxjs/toolkit react-redux`

## Run

### Create a Redux Store

1. create a file named `src/redux/store.js`

2. import the `comfigureStore` API from Redux toolkit

3. create an empty Redux store

4. export it

```
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})
```

### Provide the Redux Store to React

1. Import `Provider` and the created Redux store
2. putting a React-Redux `<Provider>` around our application in `src/index.js`, and pass the store as a prop:

```
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

### Create a Redux State Slice

1. Add a new file named `src/redux/counterSlice.js`. In that file, import the `createSlice` API from Redux Toolkit.
2. Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.

```
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
    reset: (state) =>{
        state.count = 0
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions

export default counterSlice.reducer
```

### Add Slice Reducers to the Store

Next, we need to import the reducer function from the counter slice and add it to our store. By defining a field inside the `reducer` parameter, we tell the store to use this slice reducer function to handle all updates to that state.

```
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './redux/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
```

### Use Redux State and Actions in React Components

Now we can use the React-Redux hooks to let React components interact with the Redux store. We can read data from the store with `useSelector`, and dispatch actions using `useDispatch`. Create a `src/Counter.js` file with a `<Counter>` component inside, then import that component into `App.js` and  render it inside of `<App>`.

```
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset } from './redux/counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
	 <button
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  )
}
```
