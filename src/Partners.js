import React, { useState, useEffect, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';

function Partners(props) {
  return (
    <>
      <div className="container">
        <h1 className="airdrop-title">Partners</h1>
        <br/><br/>
        <div >
          <row className="row">
            <div className="col col-12 col-md-4 align-self-center">
              <a target="_blank" href="https://www.oxbull.tech/">
                <img style={{width: "100%"}} src="/images/oxbull.png"/>
              </a>
            </div>

            <div className="col col-12 col-md-4 align-self-center">
              <a target="_blank" href="https://www.gains-associates.com/">
                <img style={{width: "100%"}} src="/images/gains.png"/>
              </a>
            </div>

            <div className="col col-12 col-md-4 align-self-center">
              <a target="_blank" href="http://cryptoomg.com/">
                <img style={{width: "100%"}} src="/images/omg.jpg"/>
              </a>
            </div>
          </row>
        </div>
      </div>
    </>
  );
}

export default Partners;
