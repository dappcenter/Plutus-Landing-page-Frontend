import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';
import { SiTiktok } from 'react-icons/si';

function Banner(props) {
  return (
    <>
      <div style={{backgroundColor: "#dc3545", height: "60px", color: "white", textAlign: "center"}} className="banner text-center">
        <p className="banner-text"><strong><a style={{color: "white", textDecoration: "none"}} target="_blank" href="https://www.alturanft.app/">The Testnet is Now Live 🚀</a></strong></p>
      </div>
    </>
  );
}

export default Banner;
