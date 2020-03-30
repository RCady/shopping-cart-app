import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

// Bootstrap Components
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import { addItemToCart } from "../state/actions"

import QtySelector from "./QtySelector"

const AddToCart = ({ product }) => {
  const [qty, setQty] = useState(1)

  const cartId = useSelector((state) => state.cart.id)
  const dispatch = useDispatch()

  return (
    <div className="mt-auto">
      <Form.Group as={ Row } className="d-flex align-items-bottom mb-2">
        <Col xs="6" md="7" className="mb-2">
          <QtySelector value={qty} onQtyUpdate={ (qty) => setQty(qty) } />
        </Col>
        <Col xs="6" md="5">
          <Button variant="primary" block className="mt-auto" onClick={ () => dispatch(addItemToCart(cartId, product, qty)) }>Add to Cart</Button>
        </Col>
      </Form.Group>
    </div>
  )
}

export default AddToCart
