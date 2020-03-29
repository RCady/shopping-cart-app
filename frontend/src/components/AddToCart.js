import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import QtySelector from "./QtySelector"

class AddToCart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: props.product,
      qty: 1
    }
  }

  render() {
    return (
      <div className="mt-auto">
        <Form.Group as={ Row } className="d-flex align-items-bottom mb-2">
          <Col xs="6" md="7" className="mb-2">
            <QtySelector initialValue={ this.state.qty } />
          </Col>
          <Col xs="6" md="5">
            <Button variant="primary" block className="mt-auto">Add to Cart</Button>
          </Col>
        </Form.Group>
      </div>
    )
  }
}

export default AddToCart
