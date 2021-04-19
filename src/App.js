import './App.css';
import React, { useState, useEffect, Component } from "react";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Navbar from './Navbar'
import Home from './Home';
import Whitepaper from './Whitepaper'
import More from './More'
function App() {
  return (
    <>
    <Navbar/>
    <Router className="app">
      <Route path="/" exact render={(props) => (<Home {...props}/>)}/>
      <Route path="/whitepaper" exact render={(props) => (<Whitepaper {...props}/>)}/>
    </Router>
    </>
  );
}

export default App;
