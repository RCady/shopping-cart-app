import { combineReducers } from 'redux'

const cart = (state = {}, action) => {
  switch(action.type) {
    case "SET_CART":
      return Object.assign({}, state, action.cart)
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
    case "REQUEST_CART":
    case "REQUEST_CART_FAIL":
    case "REQUEST_CREATE_CART":
    case "REQUEST_UPDATE_ITEM":
    case "REQUEST_REMOVE_ITEM":
    case "REQUEST_ADD_ITEM":
    default:
      return state
  }
}


const rootReducer = combineReducers({
  cart,
})

export default rootReducer