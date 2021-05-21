import './App.css';
import React, { useEffect } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './Navbar'
import Home from './Home';
import HowToBuy from './HowToBuy'
import Footer from './Footer'
import Meme from './Meme'
import Banner from './Banner'

function App() {
  if (window.location.origin !== "https://www.alturanft.com" && window.location.origin !== "http://localhost:3000" && window.location.origin !== "http://localhost:5000" && window.location.origin !== "http://localhost:3001") window.location.assign("https://www.alturanft.com");

  return (
    <>
      <Banner/>
      <Navbar/>
      <Router className="app">
        <Route path="/" exact render={(props) => (<Home {...props}/>)}/>
        <Route path="/howtobuy" exact render={(props) => (<HowToBuy {...props}/>)} />
        <Route path="/meme" exact render={(props) => (<Meme {...props}/>)} />
      </Router>
      <Footer />
    </>
  );
}

export default App;
