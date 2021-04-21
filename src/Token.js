import React, { useState, useEffect, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';
import { PieChart } from 'react-minimal-pie-chart';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


function Token(props) {
  return (
    <>
      <div className="container">
        <h1 className="airdrop-title">Tokenomics</h1>
        <br></br>
        <br></br>
        <div className="row">
          <div className="col-xl-6 col-12">
            <br></br>
            <br></br>
            <ul style={{fontSize: "1.8rem", fontWeight: "600", color: "rgb(171, 171, 171)"}}>
              <li style={{marginBottom: "1rem"}} >Name: <span style={{color: "black"}}>Plutus</span></li>
              <li style={{marginBottom: "1rem"}} >Symbol: <span style={{color: "black"}}>PLU</span></li>
              <li style={{marginBottom: "1rem"}} >Type: <span style={{color: "black"}}>BEP20</span></li>
              <li style={{marginBottom: "1rem"}} >Chain: <span style={{color: "black"}}>BSC</span></li>
              <li style={{marginBottom: "1rem"}} >Supply: <span style={{color: "black"}}>1,000,000,000</span></li>
              <li style={{marginBottom: "1rem"}} >Purpose: <span style={{color: "black"}}>Market transactions, governance</span></li>
              <li style={{marginBottom: "1rem"}} >Deflationary: <span style={{color: "black"}}>TBD</span></li>
              <li style={{marginBottom: "1rem"}} >BSC Scan: <span style={{color: "black"}}><a target="_blank" href="https://testnet.bscscan.com/token/0xA2a42fB5E742f441414f73fF1E875d53A79C4ed7">Click me</a></span></li>

            </ul>
          </div>
          <div className="col-xl-6 col-12">
            <PieChart
              className="pie"
              style={{width: "100%", padding: "0"}}
              lineWidth={100}
              data={[
                { title: 'One', value: 10, color: '#F44336' },
                { title: 'Two', value: 10, color: '#607D8B' },
                { title: 'Three', value: 15, color: '#2196F3' },
                { title: 'Four', value: 35, color: '#009688' },
                { title: 'Five', value: 15, color: '#FFC107' },
                { title: 'Six', value: 15, color: '#9C27B0' },
              ]}
            />
          <div className="text-center">
            <div className="p-4" style={{display: "inline-block"}}>
              <span style={{backgroundColor: "#F44336"}} class="dot"></span>
              <br/>
              <p style={{display: "inline-block"}}>Team (10%)</p>
            </div>
            <div className="p-4" style={{display: "inline-block"}}>
              <span style={{backgroundColor: "#607D8B"}} class="dot"></span>
              <br/>
              <p style={{display: "inline-block"}}>Marketing (10%)</p>
            </div>
            <div className="p-4" style={{display: "inline-block"}}>
              <span style={{backgroundColor: "#2196F3"}} class="dot"></span>
              <br/>
              <p style={{display: "inline-block"}}>Operation & dev (15%)</p>
            </div>
            <div className="p-4" style={{display: "inline-block"}}>
              <span style={{backgroundColor: "#009688"}} class="dot"></span>
              <br/>
              <p style={{display: "inline-block"}}>IDO (35%)</p>
            </div>
            <div className="p-4" style={{display: "inline-block"}}>
              <span style={{backgroundColor: "#FFC107"}} class="dot"></span>
              <br/>
              <p style={{display: "inline-block"}}>Private (15%)</p>
            </div>
            <div className="p-4" style={{display: "inline-block"}}>
              <span style={{backgroundColor: "#9C27B0"}} class="dot"></span>
              <br/>
              <p style={{display: "inline-block"}}>Liquidity (15%)</p>
            </div>
          </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Token;
