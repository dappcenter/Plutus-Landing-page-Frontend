import './App.css';
import React, { useState, useEffect, Component } from "react";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Navbar from './Navbar'
import Home from './Home';
import More from './More'
import Apply from './Apply'
function App() {
  return (
    <>
    <Navbar/>
    <Router className="app">
      <Route path="/" exact render={(props) => (<Home {...props}/>)}/>
      <Route path="/apply" exact render={(props) => (<Apply {...props}/>)}/>
    </Router>
    </>
  );
}

export default App;
