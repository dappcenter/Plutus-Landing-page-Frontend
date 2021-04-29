import React, { useState, useEffect, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';
import {IconButton} from '@material-ui/core';
import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
function Footer(props) {
  var style = {
    background: "linear-gradient(to right, #00d1ff, #ed1eff)",
    textAlign: "center",
    left: "0",
    bottom: "0",
    height: "200px",
    width: "100%",
    color: "white",
    fontSize: "1.3rem"
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

  return (
    <>
      <div>
        <div style={phantom} />
          <div style={style}>
            <div style={{height: "100%"}} className="container">
              <div style={{height: "100%"}} className="row ">
                <div className="col-lg-6 col-12 my-auto">
                  Copyright © Altura 2021
                </div>
                <div className="col-lg-6 col-12 my-auto">
                  <IconButton style={{color: "white", fontSize: "2rem"}} target="_blank" href="https://t.me/alturanft" color="white">
                       <TelegramIcon/>
                    </IconButton>

                    <IconButton style={{color: "white", fontSize: "2rem"}} target="_blank" href="https://github.com/Plutus-Gaming-NFTs-Reimagined" color="white">
                       <GitHubIcon/>
                    </IconButton>

                    <IconButton style={{color: "white", fontSize: "2rem"}} target="_blank" href="https://www.instagram.com/Altura.nft/" color="white">
                       <InstagramIcon/>
                    </IconButton>

                    <IconButton style={{color: "white", fontSize: "2rem"}} target="_blank" href="https://twitter.com/altura_nft" color="white">
                       <TwitterIcon/>
                    </IconButton>

                    <a style={{color: "white", fontSize: "1.3rem"}} target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScnhw-EYb3Kfn6pNdVU-efPzouh7Sugy_70YD5Yosuyd1vY1g/viewform">Apply</a>
                  <br></br>

                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default Footer;
