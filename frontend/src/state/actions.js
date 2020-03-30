import axios from 'axios'

const api = axios.create({
  baseURL: `http://127.0.0.1:8000/api/`
})

export const fetchCart = () => {
  return (dispatch) => {
    dispatch(requestCart())

    return api.get(`cart`)
      .then((response) => response.data)
      .then((data) => dispatch(setCart(data.data)))
  }
}

export const requestCart = () => ({
  type: "REQUEST_CART"
})

export const setCart = (data) => ({
  type: "SET_CART",
  cart: data,
})

export const addItemToCart = (product, qty) => ({
  type: "ADD_ITEM",
  product,
  qty,
})

export const removeItemFromCart = (index) => ({
  type: "REMOVE_ITEM",
  index,
})

export const updateItemQty = (cartItem) => ({
  type: "UPDATE_ITEM_QTY",
})
