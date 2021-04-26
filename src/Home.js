import './App.css';
import Header from './Header';
import NavbarComp from './Navbar';
import Mission from './Mission';
import Details from './Details'
import React, { useState, useEffect, Component } from "react";
import Web3 from 'web3';
import axios from "axios"
import Querystring from "query-string"
import { useParams } from "react-router";
import Team from './Team'
import Contact from './Contact'
import Timeline from './Timeline'
import Footer from './Footer'
import EnjCompare from './EnjCompare'
import Token from './Token'
import Partners from './Partners'

function Home(props) {
  return (
    <>
    <Header/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Details/>
    <div className="enj-compare">
      <hr id=""  style={{marginBottom: "200px", marginTop: "200px"}}/>
      <EnjCompare/>
    </div>
    <hr id="team"  style={{marginBottom: "200px", marginTop: "200px"}}/>
    <Team/>
    <hr id="roadmap" style={{marginBottom: "200px", marginTop: "200px"}}/>
    <Timeline />
    <hr id="token" style={{marginBottom: "200px", marginTop: "200px"}}/>
    <Token />
    <hr id="partners" style={{marginBottom: "200px", marginTop: "200px"}}/>
    <Partners />
    <hr id="contact" style={{marginBottom: "200px", marginTop: "200px"}}/>
    <Contact />
    <br></br>
    <br></br>
    <br></br>
    <Footer />

    </>
  );
}

export default Home;
