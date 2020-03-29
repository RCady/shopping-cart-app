import React, { useState } from "react"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { formatCurrency } from "../helpers"
import CartItem from "./CartItem"

const Cart = () => {
  const [cartItems, setCartItems] = useState([{ id: 2, name: "Hello There!", price: 49.95 }])
  const [total, setTotal] = useState(0)

  return (
    <Card>
      <Card.Header>Your Cart</Card.Header>
      <Card.Body>
        {
          cartItems.map((cartItem) => (
            <div>
              <CartItem product={cartItem} />
              <hr />
            </div>
          ))
        }
        <Row className="font-weight-bold">
          <Col md="5"></Col>
          <Col xs="6" md="4">Total</Col>
          <Col xs="6" md="3" className="text-right">{ formatCurrency(total) }</Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default Cart