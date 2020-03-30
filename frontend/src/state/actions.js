import axios from 'axios'

export const fetchCart = () => {
  return (dispatch) => {
    dispatch(requestCart())

    return axios.get(`http://127.0.0.1/api/cart`)
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
