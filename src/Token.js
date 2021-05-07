import React, { useState, useEffect, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';
import { PieChart } from 'react-minimal-pie-chart';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import axios from 'axios'

function Token(props) {

  const [totalSupply, setTotalSupply] = useState("")
  const [circulatingSupply, setCirculatingSupply] = useState("")
  const [price, setPrice] = useState("")
  const [mcap, setMcap] = useState("")

  useEffect(() => {
    fetchPrice()
  }, [])

  function fetchPrice(){
    axios.get("/api/info")
    .then(res => {
      setTotalSupply(res.data.totalCoins)
      setCirculatingSupply(res.data.circulatingCoins)
      setPrice(res.data.price)
      setMcap(res.data.marketCap)
    })
  }

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
              <li style={{marginBottom: "1rem"}} >Name: <span style={{color: "black"}}>Altura</span></li>
              <li style={{marginBottom: "1rem"}} >Symbol: <span style={{color: "black"}}>ALU</span></li>
              <li style={{marginBottom: "1rem"}} >Type: <span style={{color: "black"}}>BEP20</span></li>
              <li style={{marginBottom: "1rem"}} >Chain: <span style={{color: "black"}}>BSC</span></li>
              <li style={{marginBottom: "1rem"}} >Total supply: <span style={{color: "black"}}>{`${String(totalSupply).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</span></li>
              <li style={{marginBottom: "1rem"}} >Circulating supply: <span style={{color: "black"}}>{`${String(circulatingSupply).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</span></li>
              <li style={{marginBottom: "1rem"}} >Price: <span style={{color: "black"}}>{`$${price}`}</span></li>
              <li style={{marginBottom: "1rem"}} >Market cap: <span style={{color: "black"}}>{`$${String(mcap).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</span></li>
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
                { title: 'Four', value: 10, color: '#9727b0' },
                { title: 'Five', value: 30, color: '#009688' },
                { title: 'Six', value: 10, color: '#FFC107' },
                { title: 'Seven', value: 15, color: '#33c9dc' },
              ]}
            />
          <div className="text-center">
            <div className="p-3" style={{display: "inline-block"}}>
              <span style={{backgroundColor: "#F44336"}} class="dot"></span>
              <br/>
              <p style={{display: "inline-block"}}>Team (10%)</p>
            </div>
            <div className="p-3" style={{display: "inline-block"}}>
              <span style={{backgroundColor: "#607D8B"}} class="dot"></span>
              <br/>
              <p style={{display: "inline-block"}}>Marketing (10%)</p>
            </div>
            <div className="p-3" style={{display: "inline-block"}}>
              <span style={{backgroundColor: "#2196F3"}} class="dot"></span>
              <br/>
              <p style={{display: "inline-block"}}>Operation & Dev (15%)</p>
            </div>
            <div className="p-3" style={{display: "inline-block"}}>
              <span style={{backgroundColor: "#9727b0"}} class="dot"></span>
              <br/>
              <p style={{display: "inline-block"}}>Reserve & Advisory (10%)</p>
            </div>
            <div className="p-3" style={{display: "inline-block"}}>
              <span style={{backgroundColor: "#009688"}} class="dot"></span>
              <br/>
              <p style={{display: "inline-block"}}>IDO (30%)</p>
            </div>
            <div className="p-3" style={{display: "inline-block"}}>
              <span style={{backgroundColor: "#FFC107"}} class="dot"></span>
              <br/>
              <p style={{display: "inline-block"}}>Private (10%)</p>
            </div>
            <div className="p-3" style={{display: "inline-block"}}>
              <span style={{backgroundColor: "#33c9dc"}} class="dot"></span>
              <br/>
              <p style={{display: "inline-block"}}>Liquidity (15%)</p>
            </div>
          </div>

          </div>

        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}

export default Token;
