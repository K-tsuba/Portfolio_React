import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
// import { Link } from 'react-scroll';
// import { useLocation } from 'react-router-dom';

const Header = () => {

  // const location = useLocation();

  return <header className='sticky-top'>
    <Navbar collapseOnSelect expand="lg" className='px-3'>
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
          {/* {location.pathname === '/' && (
          <Link to="contact" smooth={true} duration={10} className='contact'>CONTACT</Link>
          )} */}
        </Nav>
      </Navbar.Collapse>
    </Navbar >
  </header>
}

export default Header