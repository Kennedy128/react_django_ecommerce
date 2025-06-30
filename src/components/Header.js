import React from 'react'
import {Navbar,Nav,Container,Row,NavDropdown, NavbarBrand} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Link to="/home" className="navbar-brand">
            ProShop
          </Link>
          
          <Navbar.Toggle aria-controls="basic-navbar" />
          <Navbar.Collapse id="basic-navbar">
            <Nav className="ms-auto">
              <Link to="/cart" className="nav-link">
                <i className="fas fa-shopping-cart"></i> Cart
              </Link>
              <Link to="/login" className="nav-link">
                <i className="fas fa-user"></i> Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
