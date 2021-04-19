import React, { useState, useEffect, Component } from "react";
import {Navbar, Nav, NavDropdown, Form, Button, FormControl} from 'react-bootstrap';
import {IconButton} from '@material-ui/core';
import TelegramIcon from '@material-ui/icons/Telegram';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';
import GitHubIcon from '@material-ui/icons/GitHub';
function NavbarComp(props) {
  return (
    <>
      <Navbar className="pt-4 pb-4" expand="lg">
        <div className="container">
          <a href="/">
            <img
              href="/"
              style={{border: "2px solid white", borderRadius: "50%"}}
              src="/images/logo.png"
              width="33"
              height="33"
              className="d-inline-block align-top mr-2"
              alt="React Bootstrap logo"
            />
          </a>

        <Navbar.Brand className="navbar-plutus-title" style={{fontSize: "", fontWeight: ""}} href="/">Plutus</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="mr-3" href="/#team">Team</Nav.Link>
              <Nav.Link className="mr-3" href="/#roadmap">Roadmap</Nav.Link>
              <Nav.Link className="mr-3" href="/#contact">Contact</Nav.Link>
              <Nav.Link className="mr-3 whitepaper-link" href="/whitepaper">White Paper</Nav.Link>
              <Nav.Link target="_blank" className="mr-3" href="https://github.com/Plutus-Gaming-NFTs-Reimagined"><GitHubIcon/></Nav.Link>
              <Nav.Link target="_blank" className="mr-3 whitepaper-link" href="https://t.me/joinchat/QFARK8z2hHJhNjNh"><TelegramIcon/></Nav.Link>

            </Nav>
            <Nav className="ml-auto">
              <Button target="_blank" className="mr-2" href="https://plutus-app-mvp.herokuapp.com/marketplace">Launch App</Button>
            </Nav>
          </Navbar.Collapse>
      </div>
    </Navbar>
    </>
  );
}

export default NavbarComp;
