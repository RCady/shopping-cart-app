import React from "react"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { formatCurrency } from "../helpers"
import QtySelector from "./QtySelector"

const CartItem = ({ product }) => {
  return (
    <Row className="d-md-flex align-items-center">
      <Col md="5" className="mb-2">{ product.name }</Col>
      <Col xs="6" md="4">
        <QtySelector initialValue={1} />
      </Col>
      <Col xs="6" md="3" className="text-right">
        { formatCurrency(product.price) }
      </Col>
    </Row>
  )
}

export default CartItem
