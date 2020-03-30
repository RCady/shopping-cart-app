import axios from 'axios'
import Cookies from "js-cookie"

const api = axios.create({
  baseURL: `http://127.0.0.1:8000/api/`,
  headers: { "Accept": "application/json" }
})

export const handleCartResponse = (dispatch, response) => {
  // Add a delay to simulate loading experience
  setTimeout(() => {
    dispatch(setCart(response.data.data))
    dispatch(setCartIsLoaded())
  }, 500)
}

export const createCart = () => {
  return (dispatch) => {
    dispatch(requestCreateCart())
    dispatch(setCartIsLoading())
    return api.post(`cart`)
      .then((response) => {
        Cookies.set("shopping-cart-id", response.data.data.id)
        return response
      })
      .then((response) => handleCartResponse(dispatch, response))
  }
}

export const fetchCart = () => {
  return (dispatch) => {
    const cartId = Cookies.get("shopping-cart-id")

    if (typeof cartId === 'undefined') {
      return dispatch(createCart())
    }

    dispatch(requestCart())
    dispatch(setCartIsLoading())
    return api.get(`cart/${cartId}`)
      .then((response) => handleCartResponse(dispatch, response))
  }
}

export const removeItemFromCart = (cartId, cartItem) => {
  return (dispatch) => {
    dispatch(requestRemoveItem())
    dispatch(setCartIsLoading())
    return api.delete(`cart/${cartId}/item/${cartItem.id}`)
      .then((response) => handleCartResponse(dispatch, response))
  }
}

export const addItemToCart = (cartId, product, qty) => {
  return (dispatch) => {
    dispatch(requestAddItem())
    dispatch(setCartIsLoading())
    return api.post(`cart/${cartId}/item`, {
      product_id: product.product_id,
      qty,
    })
      .then((response) => handleCartResponse(dispatch, response))
  }
}

export const updateCartItem = (cartId, cartItem, qty) => {
  return (dispatch) => {
    dispatch(requestUpdateItem())
    dispatch(setCartIsLoading())
    return api.put(`cart/${cartId}/item/${cartItem.id}`, {
      qty,
    })
      .then((response) => handleCartResponse(dispatch, response))
  }
}

export const requestCart = () => ({
  type: "REQUEST_CART"
})

export const requestCreateCart = () => ({
  type: "REQUEST_CREATE_CART"
})

export const requestUpdateItem = () => ({
  type: "REQUEST_UPDATE_ITEM"
})

export const requestRemoveItem = () => ({
  type: "REQUEST_REMOVE_ITEM"
})

export const requestAddItem = () => ({
  type: "REQUEST_ADD_ITEM"
})

export const setCartIsLoading = () => ({
  type: "CART_IS_LOADING"
})

export const setCartIsLoaded = () => ({
  type: "CART_IS_LOADED"
})

export const setCart = (data) => ({
  type: "SET_CART",
  cart: data,
})
