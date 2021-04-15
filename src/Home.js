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
import Roadmap from './Roadmap'
import Timeline from './Timeline'
import Footer from './Footer'

function Home(props) {
  return (
    <>
    <Header/>
    <Mission/>
    <hr/>
    <Details/>
    <hr id="team"  style={{marginBottom: "150px", marginTop: "100px"}}/>
    <Team/>
    <hr id="roadmap" style={{marginBottom: "150px", marginTop: "100px"}}/>
    <Timeline />
    <hr id="contact" style={{marginBottom: "150px", marginTop: "100px"}}/>
    <Contact />
    <br/>
    <br/>
    <br/>
    <Footer />

    </>
  );
}

export default Home;
