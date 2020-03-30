import axios from 'axios'

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

export const fetchCart = () => {
  return (dispatch) => {
    dispatch(setCartIsLoading())
    return api.get(`cart/c00b36af-b750-4f76-bc24-03fabd9f5f00`)
      .then((response) => handleCartResponse(dispatch, response))
  }
}

export const removeItemFromCart = (cartItem) => {
  return (dispatch) => {
    dispatch(setCartIsLoading())
    return api.delete(`cart/c00b36af-b750-4f76-bc24-03fabd9f5f00/item/${cartItem.id}`)
      .then((response) => handleCartResponse(dispatch, response))
  }
}

export const addItemToCart = (product, qty) => {
  return (dispatch) => {
    dispatch(setCartIsLoading())
    return api.post(`cart/c00b36af-b750-4f76-bc24-03fabd9f5f00/item`, {
      product_id: product.product_id,
      qty,
    })
      .then((response) => handleCartResponse(dispatch, response))
  }
}

export const updateCartItem = (cartItem, qty) => {
  return (dispatch) => {
    dispatch(setCartIsLoading())
    return api.put(`cart/c00b36af-b750-4f76-bc24-03fabd9f5f00/item/${cartItem.id}`, {
      qty,
    })
      .then((response) => handleCartResponse(dispatch, response))
  }
}

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
