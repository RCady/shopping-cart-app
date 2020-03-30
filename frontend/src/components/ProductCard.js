import React from "react"
import Card from "react-bootstrap/Card"

import { formatCurrency } from "../helpers"
import AddToCart from "./AddToCart"

const ProductCard = ({ product }) => {
  return(
  <Card className="h-100">
    <Card.Body className="d-flex flex-column">
      <Card.Title className="text-small">{ product.name }</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{ formatCurrency(product.price) }</Card.Subtitle>
      <Card.Text>{ product.short_description }</Card.Text>
      <AddToCart product={ product } />
    </Card.Body>
  </Card>
)}

export default ProductCard
