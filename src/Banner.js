import React, { useState, useEffect, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';

function Banner(props) {
  return (
    <>
      <div style={{backgroundColor: "#dc3545", height: "60px", color: "white", textAlign: "center"}} className="banner text-center">
        <p className="banner-text" style={{}}>Altura Launched! 🚀 <strong><a style={{color: "white"}} target="_blank" href="https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x8263CD1601FE73C066bf49cc09841f35348e3be0">PancakeSwap Page</a></strong></p>
      </div>
    </>
  );
}

export default Banner;
