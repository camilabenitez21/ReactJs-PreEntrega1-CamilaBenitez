import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import CartWidget from './CartWidget';

function MiNavbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">Mi e-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShowMenu} />
        <Navbar.Collapse id="basic-navbar-nav" className={showMenu ? "show" : ""}>
          <Nav className="me-auto">
            <Nav.Link href="#">Inicio</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Ropa</NavDropdown.Item>
              <NavDropdown.Item href="#">Zapatos</NavDropdown.Item>
              <NavDropdown.Item href="#">Accesorios</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Ofertas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Nosotros</Nav.Link>
            <Nav.Link href="#">Contacto</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MiNavbar;
