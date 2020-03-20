import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <ul>
    {
      data.allProduct.edges.map(edge => <li>{ edge.node.name }</li> )
    }
    </ul>
    { data.allProduct.edges[0].node.name }
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const query = graphql`
  query ProductsQuery {
    allProduct {
      edges {
        node {
          id
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
