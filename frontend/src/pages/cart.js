import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Layout from "../components/layout"
import Cart from "../components/Cart"

const CartPage = ({ data }) => (
  <Layout>
    <Row>
      <Col xs="12" md={{ span: 10, offset: 1 }} className="mt-4">
        <Cart />
      </Col>
    </Row>
  </Layout>
)

export default CartPage
