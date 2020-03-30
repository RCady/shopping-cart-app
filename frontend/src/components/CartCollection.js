import React from "react"

import CartItem from "./CartItem"

const CartCollection = ({ cartItems }) => (
  cartItems.map((cartItem) => (
    <div key={ cartItem.product.id }>
      <CartItem cartItem={ cartItem } />
      <hr />
    </div>
  ))
)

export default CartCollection
