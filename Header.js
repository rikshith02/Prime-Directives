// src/components/Header.js

import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Telecom Inventory Management</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
