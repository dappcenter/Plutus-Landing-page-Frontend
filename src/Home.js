import './App.css';
import Header from './Header';
import NavbarComp from './Navbar';
import Details from './Details'
import React, { useState, useEffect, Component } from "react";
import Web3 from 'web3';
import axios from "axios"
import Querystring from "query-string"
import { useParams } from "react-router";
import Team from './Team'
import Contact from './Contact'
import Timeline from './Timeline'
import EnjCompare from './EnjCompare'
import Token from './Token'
import Partners from './Partners'
import TokenInfo from './TokenInfo'

function Home(props) {

  const [totalSupply, setTotalSupply] = useState("1000000000")
  const [circulatingSupply, setCirculatingSupply] = useState("220000000")
  const [price, setPrice] = useState("0.003523")
  const [mcap, setMcap] = useState("7242562")
  const [holders, setHolders] = useState("6954")

  useEffect(() => {
    // fetchPrice()
  }, [])

  function fetchPrice(){
    axios.get("/api/info")
    .then(res => {
      setTotalSupply(String(res.data.totalCoins).replace(/\B(?=(\d{3})+(?!\d))/g, ","))
      setCirculatingSupply(String(res.data.circulatingCoins).replace(/\B(?=(\d{3})+(?!\d))/g, ","))
      setPrice(`$${String(res.data.price)}`)
      setMcap(`$${String(res.data.marketCap).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`)
      setHolders(`${String(res.data.holders).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`)
    })
  }

  return (
    <>
    <Header/>
    <div style={{marginBottom: "100px"}}></div>
    <TokenInfo holders={holders} price={price} mcap={mcap}/>
    <div style={{marginBottom: "100px"}}></div>

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
    <Token holders={holders} totalSupply={totalSupply} circulatingSupply={circulatingSupply} price={price} mcap={mcap}/>
    <hr id="partners" style={{marginBottom: "200px", marginTop: "200px"}}/>
    <Partners />
    <hr id="contact" style={{marginBottom: "200px", marginTop: "200px"}}/>
    <Contact />
    <div style={{marginBottom: "200px"}}></div>
    </>
  );
}

export default Home;
