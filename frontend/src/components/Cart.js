import React from "react"
import { useSelector } from "react-redux"

// Bootstrap Components
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

import CartCollection from "./CartCollection"
import CartTotals from "./CartTotals"

const Cart = ({ cart }) => {
  const cartItems = useSelector((state) => state.cart.items)
  const total = useSelector((state) => state.cart.total_price)

  return (
    <div>
      <Card>
        <Card.Header>Your Cart</Card.Header>
        <Card.Body>
          {
            cartItems.length > 0 ? (
              <>
                <CartCollection cartItems={ cartItems } />
                <CartTotals total={ total } />
              </>
              ) : <h3 className="text-center text-muted">Your Cart is Empty</h3>
          }
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
