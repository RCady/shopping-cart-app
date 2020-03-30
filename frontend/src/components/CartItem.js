import React from "react"

// Bootstrap Components
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

import { formatCurrency } from "../helpers"
import QtySelector from "./QtySelector"

const CartItem = ({ cartItem, qty, index, onUpdateQty, onRemoveItem }) => {
  const product = cartItem.product

  return (
    <Row className="d-md-flex align-items-center">
      <Col md="5">
        <h5 className="mb-0">{ product.name }</h5>
      </Col>
      <Col xs="6" md="4">
        <QtySelector initialValue={ qty ?? 1 } onQtyUpdate={ onUpdateQty ?? onUpdateQty } />
      </Col>
      <Col xs="6" md="3" className="text-right">
        <div className="mb-0">{ formatCurrency(product.price) }</div>
        <div><Button variant="link" className="text-danger btn-sm p-0" onClick={ () => onRemoveItem(index) }>Remove</Button></div>
      </Col>
    </Row>
  )
}

export default CartItem
