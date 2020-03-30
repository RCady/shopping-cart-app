import React from "react"

// Bootstrap Components
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { formatCurrency } from "../helpers"

const CartTotal = ({ total }) => {
  return (
    <Row className="font-weight-bold">
      <Col md="5"></Col>
      <Col xs="6" md="4">Total</Col>
      <Col xs="6" md="3" className="text-right">{ formatCurrency(total) }</Col>
    </Row>
  )
}

export default CartTotal
