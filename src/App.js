import './App.css';
import Header from './Header';
import NavbarComp from './Navbar';
import React, { useState, useEffect, Component } from "react";
import axios from "axios"
import Querystring from "query-string"
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Home from './Home';
import Footer from './Footer'

function App() {

  return (
    <>
    <NavbarComp/>
    <Router className="app">
      <Route path="/" exact render={(props) => (<Home {...props}/>)}/>
    </Router>
    </>
  );
}

export default App;
