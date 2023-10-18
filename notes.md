**Common Pitfalls and Issues when Learning and Using Redux Toolkit:**

当学习和使用 Redux Toolkit 时，可能会遇到以下常见问题和陷阱：

1. **Destructuring Assignment Issues:** When using `useSelector`, ensure that the variables in the destructuring assignment match the property names in the state object to correctly access state values.

   解构赋值问题：在使用 `useSelector` 时，确保解构赋值的变量名与状态对象中的属性名保持一致，以正确获取状态值。
2. **Calling `dispatch` Directly in Reducer:** Redux reducers should be pure functions and should not call `dispatch` directly within them.

   在 reducer 中直接调用 `dispatch`：Redux reducer 应该是纯函数，不应该在 reducer 中直接调用 `dispatch` 函数。
3. **Forgetting to Use `immer`:** Redux Toolkit's `createSlice` uses the `immer` library to manage immutable state. Ensure that you correctly update state within reducers without manually deep copying objects.

   忘记使用 `immer`：Redux Toolkit 的 `createSlice` 使用 `immer` 库来管理不可变状态，确保在 reducer 中正确更新状态，不需要手动深拷贝对象。
4. **Forgetting to Export Action Creators:** Make sure to export all action creators when defining reducers using `createSlice` so that they can be used in components.

   忘记导出 action creators：确保在使用 `createSlice` 定义 reducer 时导出所有的 action creators，以便在组件中使用。
5. **Not Calling `configureStore`:** When using Redux Toolkit, make sure to call `configureStore` to create the Redux store and register reducers.

   不调用 `configureStore`：在使用 Redux Toolkit 时，请确保调用 `configureStore` 来创建 Redux store 并注册 reducer。
6. **Async Operations Without Redux Middleware:** If you need to perform asynchronous operations in Redux, such as network requests, use Redux middleware (e.g., `redux-thunk` or `redux-saga`) to handle async logic.

   异步操作没有使用 Redux 中间件：如果需要在 Redux 中执行异步操作，例如网络请求，请使用 Redux 中间件（例如 `redux-thunk` 或 `redux-saga`）来处理异步逻辑。
7. **Incorrect Data Flow:** Ensure that the data flow is unidirectional, where components dispatch actions to trigger reducer updates, rather than directly modifying state. Avoid directly modifying the Redux store in components.

   不正确的数据流：确保数据流是单向的，即组件通过 dispatch action 触发 reducer 更新状态，而不是直接修改状态。避免在组件中直接修改 Redux store。
8. **Incorrect State Update Logic:** Ensure that the update logic within reducers is correct and that the new state is achieved by returning a new object, rather than directly modifying the old state.

   不正确的状态更新逻辑：确保 reducer 中的更新逻辑是正确的，并且新的状态是通过返回一个新的对象来实现的，而不是直接修改旧状态。
9. **Forgetting to Connect Redux and Components:** Use `useSelector` and `useDispatch` to connect components with the Redux store, enabling access to state and dispatching actions within components.

   忘记连接 Redux 和组件：使用 `useSelector` 和 `useDispatch` 将组件与 Redux store 连接起来，以便在组件中访问状态并触发操作。
10. **Lack of Familiarity with Redux Toolkit:** Before diving into Redux Toolkit, make sure to read the official documentation and examples to understand the correct usage and best practices.

   对 Redux Toolkit 不熟悉：在深入研究 Redux Toolkit 之前，请确保阅读官方文档和示例，以了解正确的用法和最佳实践。
11. **Incorrect Action Naming and Structure:** Keep action names consistent and use appropriate data structures for passing information. This helps in organizing and maintaining the code.

    不正确的 action 命名和结构：保持 action 的命名一致，并使用适当的数据结构来传递信息。这有助于组织和维护代码。

---

Learning Materials:

[Redux Tutorial (with Redux Toolkit)](https://www.youtube.com/watch?v=iBUJVy8phqw&t=2s)

[Redux Toolkit Quick Start](https://redux-toolkit.js.org/tutorials/quick-start)
