import React, { useState, useEffect, Component } from "react";
import {Navbar, Nav, NavDropdown, Form, Button, FormControl} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';

function NavbarComp(props) {
  return (
    <>
      <Navbar className="pt-4 pb-4" expand="lg">
        <div className="container">
          <Navbar.Brand href="/">Plutus</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="mr-2" href="#team">Team</Nav.Link>
              <Nav.Link className="mr-2" href="#roadmap">Roadmap</Nav.Link>
              <Nav.Link target="_blank" className="mr-2" href="https://github.com/Plutus-Gaming-NFTs-Reimagined">Github</Nav.Link>
              <Nav.Link className="mr-2" href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </div>
    </Navbar>
    </>
  );
}

export default NavbarComp;
