import React, { useState, useEffect, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';

function Banner(props) {
  return (
    <>
      <div style={{backgroundColor: "#dc3545", height: "60px", color: "white", textAlign: "center"}} className="banner text-center">
        <p className="banner-text">Altura is Now on <strong><a style={{color: "white", textDecoration: "none"}} target="_blank" href="https://coinmarketcap.com/currencies/altura/">CoinMarketCap! 🚀 </a></strong></p>
      </div>
    </>
  );
}

export default Banner;
