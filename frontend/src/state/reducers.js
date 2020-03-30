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
    case "SET_CART_IS_LOADING":
      return {
        ...state,
        isLoading: true,
      }
    case "SET_CART_IS_LOADED":
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state
  }
}


const rootReducer = combineReducers({
  cart,
})

export default rootReducer