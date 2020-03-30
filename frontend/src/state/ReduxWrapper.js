import React from "react"
import { Provider } from "react-redux"
import thunkMiddleware from "redux-thunk"
import { createStore, applyMiddleware, compose } from "redux"
import { fetchCart } from "./actions"
import rootReducer from "./reducers"

const initialState = {
  cart: {
    id: null,
    items: [],
    total_items: 0,
    total_price: 0,
    created_at: null,
    updated_at: null,
    is_loading: true,
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(
    thunkMiddleware
  ))
)

store.dispatch(fetchCart())

export default ({ element }) => (
  <Provider
    store={store}>{ element }</Provider>
)
