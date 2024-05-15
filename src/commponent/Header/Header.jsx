import React from 'react'
import './Header.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
function Header() {
  return (
    <div>
<Navbar collapseOnSelect expand="lg" id='navbar' className="bg-body">
      <Container>
        <Navbar className='logo' href="#home">Vishnu Vijayan</Navbar>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
          </Nav>
          <Nav className='nav-links'>
            <Nav.Link style={{fontSize:'16px'}} className='nav-link' href="#About">About</Nav.Link>
            <Nav.Link style={{fontSize:'16px'}} className='nav-link' href="#Experience">Experience</Nav.Link>
            <Nav.Link style={{fontSize:'16px'}} className='nav-link' href="#Projects">Projects</Nav.Link>
            <Nav.Link style={{fontSize:'16px'}} className='nav-link' eventKey={2} href="#Contanct">
            Contanct
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
