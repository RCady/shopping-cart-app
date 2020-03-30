import React from "react"
import { Provider } from "react-redux"
import thunkMiddleware from "redux-thunk"
import { createStore, applyMiddleware } from "redux"
import { fetchCart } from "./actions"
import rootReducer from "./reducers"

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const ReduxWrapper = ({ children, requestCart }) => {
  const initialState = {
    cart: {
      id: "",
      items: [],
      total_items: 0,
      total_price: 0,
      created_at: null,
      updated_at: null,
      is_loading: true,
    }
  }

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware
    )
  )

  if (requestCart) {
    store.dispatch(fetchCart(initialState.cart.id))
  }

  return (
    <Provider store={ store }>{ children }</Provider>
  )
}

export default ReduxWrapper
