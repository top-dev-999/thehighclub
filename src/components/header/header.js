import React from "react";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
//import assets
import LogoImage from "../../assets/images/logo.png";
function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={LogoImage} height={75} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="buyanape">BUY AN APE</Nav.Link>
            <Nav.Link eventKey={2} href="#roadmap">
              ROADMAP
            </Nav.Link>
            <Nav.Link href="#team">TEAM</Nav.Link>
            <Nav.Link href="#gallery">GALLERY</Nav.Link>
            <Nav.Link>PROVENANCE</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
