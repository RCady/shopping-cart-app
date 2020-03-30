import React from "react"
import { useDispatch, useSelector } from "react-redux"

// Bootstrap Components
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

import { formatCurrency } from "../helpers"
import CartItem from "./CartItem"
import { removeItemFromCart } from "../state/actions"

const Cart = ({ cart }) => {
  const cartItems = useSelector((state) => state.cart.items)
  const total = useSelector((state) => state.cart.total)
  const dispatch = useDispatch()

  return (
    <div>
      <Card>
        <Card.Header>Your Cart</Card.Header>
        <Card.Body>
          {
            cartItems.map((cartItem, index) => (
              <div key={ cartItem.product.id }>
                <CartItem
                  cartItem={ cartItem }
                  index={ index }
                  qty={ cartItem.qty }
                  onRemoveItem={ (index) => dispatch(removeItemFromCart(index)) }
                />
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
      <Row>
        <Col className="text-right mt-2">
          <Button variant="primary" block>Checkout</Button>
        </Col>
      </Row>
    </div>
  )
}

export default Cart
