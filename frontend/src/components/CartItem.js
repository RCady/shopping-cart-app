import React from "react"
import { useDispatch } from "react-redux"

// Bootstrap Components
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

import { formatCurrency } from "../helpers"
import QtySelector from "./QtySelector"
import { removeItemFromCart, updateCartItem } from "../state/actions"

const CartItem = ({ cartItem }) => {
  const product = cartItem.product
  const dispatch = useDispatch()

  return (
    <Row className="d-md-flex align-items-center">
      <Col md="5">
        <h5 className="mb-0">{ product.name }</h5>
      </Col>
      <Col xs="6" md="4">
        <QtySelector value={ cartItem.qty } onQtyUpdate={ (qty) => dispatch(updateCartItem(cartItem, qty)) } />
      </Col>
      <Col xs="6" md="3" className="text-right">
        <div className="mb-0">{ formatCurrency(cartItem.line_total) }</div>
        <div><Button variant="link" className="text-danger btn-sm p-0" onClick={ () => dispatch(removeItemFromCart(cartItem)) }>Remove</Button></div>
      </Col>
    </Row>
  )
}

export default CartItem
