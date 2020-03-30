import React from "react"
import { graphql } from "gatsby"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Cart from "../components/Cart"
import Layout from "../components/layout"
import ProductCard from "../components/ProductCard"

const IndexPage = ({ data }) => (
  <Layout>
    <Row>
      <Col xs="12" className="mt-4">
        <Cart />
      </Col>
    </Row>
    <Row className="row-eq-height mt-4">
      {
        data.allProduct.edges.map(edge => (
            <Col xs="12" md="6" lg="4" style={{ marginBottom: 15 }} key={edge.node.id} >
              <ProductCard product={edge.node}/>
            </Col>
          )
        )
      }
    </Row>
  </Layout>
)

export const query = graphql`
  query ProductsQuery {
    allProduct {
      edges {
        node {
          id
          product_id
          name
          short_description
          description
          price
          created_at
        }
      }
    }
  }
`

export default IndexPage
