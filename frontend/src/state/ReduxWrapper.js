import React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "./reducers"

const initialState = {
  cart: {
    items: [
      {
        id: 231,
        product: {
          id: 1,
          name: "Hello World",
          price: 24.99,
        },
        qty: 2,
        line_total: 24.99,
      },
      {
        id: 232,
        product: {
          id: 1,
          name: "Hello World 2",
          price: 24.99,
        },
        qty: 1,
        line_total: 24.99,
      },
      {
        id: 233,
        product: {
          id: 1,
          name: "Hello World 3",
          price: 25.99,
        },
        qty: 2,
        line_total: 24.99,
      }
    ],
    total: 0
  }
}

export default ({ element }) => (
  <Provider
    store={
      createStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    }>{ element }</Provider>
)
