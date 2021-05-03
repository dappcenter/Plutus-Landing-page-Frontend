import './App.css';
import React, { useState, useEffect, Component } from "react";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Navbar from './Navbar'
import Home from './Home';
import More from './More'
import Apply from './Apply'
import HowToBuy from './HowToBuy'
import Footer from './Footer'
import Meme from './Meme'
import Banner from './Banner'
import {Translator, Translate} from 'react-auto-translate';
import ReactGA from 'react-ga';

function App() {
  if (window.location.origin != "https://www.alturanft.com" && window.location.origin != "http://localhost:3000" && window.location.origin != "http://localhost:5000") window.location.assign("https://www.alturanft.com");

  useEffect(() => {
    const TRACKING_ID = "G-4LHDYZTWLC";
    ReactGA.initialize(TRACKING_ID)
    ReactGA.pageview('/')
  }, [])

  return (
    <>
      <Banner/>
      <Navbar/>
      <Router className="app">
        <Route path="/" exact render={(props) => (<Home {...props}/>)}/>
        <Route path="/apply" exact render={(props) => (<Apply {...props}/>)}/>
        <Route path="/howtobuy" exact render={(props) => (<HowToBuy {...props}/>)} />
        <Route path="/meme" exact render={(props) => (<Meme {...props}/>)} />
      </Router>
      <Footer />
    </>
  );
}

export default App;
