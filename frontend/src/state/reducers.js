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
    case "FETCH_CART":
    case "REQUEST_CART":
    default:
      return state
  }
}


const rootReducer = combineReducers({
  cart,
})

export default rootReducer