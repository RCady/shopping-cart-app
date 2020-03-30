import { Link } from "gatsby"
import { Navbar } from "react-bootstrap"
import PropTypes from "prop-types"
import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"

const Header = ({ siteTitle }) => (
  <Navbar bg="light">
    <Container>
      <Link to="/">
        <Navbar.Brand>{siteTitle}</Navbar.Brand>
      </Link>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Products</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
