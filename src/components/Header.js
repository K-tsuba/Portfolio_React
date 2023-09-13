import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return <header className='sticky-top'>
    <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="/">
          <div>
            <div className='circle'>K.T</div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/skills">SKILLS</Nav.Link>
            <Nav.Link href="/works">WORKS</Nav.Link>
            <Nav.Link href="/contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar >
  </header>
}

export default Header