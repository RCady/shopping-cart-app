import { combineReducers } from 'redux'

const cart = (state = {}, action) => {
  switch(action.type) {
    case "SET_CART":
      return Object.assign({}, state, action.cart)
    case "UPDATE_CART":
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item, i) => i !== action.index)
      }
    case "CART_IS_LOADING":
      return {
        ...state,
        is_loading: true,
      }
    case "CART_IS_LOADED":
      return {
        ...state,
        is_loading: false,
      }
    default:
      return state
  }
}


const rootReducer = combineReducers({
  cart,
})

export default rootReducer