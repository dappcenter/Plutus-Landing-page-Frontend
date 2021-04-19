import React, { useState, useEffect, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';
import {IconButton} from '@material-ui/core';
import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';

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
                <div className="col-8 my-auto">
                  Copyright © Plutus 2021
                </div>
                <div className="col-4 my-auto">
                  <IconButton style={{color: "white", fontSize: "1.3rem"}} target="_blank" href="https://t.me/joinchat/QFARK8z2hHJhNjNh" color="white">
                     <TelegramIcon/>
                  </IconButton>

                  <IconButton style={{color: "white", fontSize: "1.3rem"}} target="_blank" href="https://github.com/Plutus-Gaming-NFTs-Reimagined" color="white">
                     <GitHubIcon/>
                  </IconButton>
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
