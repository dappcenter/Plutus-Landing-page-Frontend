import React, { useState, useEffect, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {IconButton} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LanguageIcon from '@material-ui/icons/Language';
function Team(props) {
  return (
    <>
      <div className="container">
        <h1 className="airdrop-title">The Team</h1>
        <br/>
        <div className="row text-center justify-content-around">
          <div className="col-md-3 p-3 col-12">
            <img className="founder-image team-images mb-3" style={{width: "100%"}} src="/images/majd.jpg"/>
            <h3>Majd Hailat</h3>
            <h5 style={{fontWeight: "400", color: "#ABABAB"}}>Founder & Lead Developer</h5>
            <p align={"left"}style={{fontSize: "0.9rem"}}><span style={{color: "#ABABAB"}}>Majd, an ambitious young entrepreneur, is the developer of <a target="_blank" href="https://www.portfolioview.ca/">Portfolio View
            </a> and the host of the <a target="_blank" href="https://www.youtube.com/channel/UCSI8zjZx3Y-dqCvShs43nyg">Eager Money</a> YouTube channel with 15,000 subscribers. He has been a developer and investor in the cryptocurrency space since 2019</span> </p>
          <IconButton target="_blank" href="https://www.linkedin.com/in/majd-hailat-033389197/" color="primary">
            <LinkedInIcon />
          </IconButton>
          <IconButton target="_blank" href="https://github.com/majd64" color="primary">
            <GitHubIcon />
          </IconButton>
          <IconButton target="_blank" href="https://majdhailat.com/" color="primary">
            <LanguageIcon />
          </IconButton>
          <IconButton target="_blank" href="https://www.youtube.com/channel/UCSI8zjZx3Y-dqCvShs43nyg" color="primary">
            <YouTubeIcon />
          </IconButton>
          </div>

          <div className="col-md-3 p-3 col-12">
            <img className="founder-image team-images mb-3" style={{width: "100%"}} src="/images/maxim2.jpeg"/>
            <h3>Maxim Sindall</h3>
            <h5 style={{fontWeight: "400", color: "#ABABAB"}}>Co-Founder & Head of Finance</h5>
              <p align={"left"}style={{fontSize: "0.9rem"}}><span style={{color: "#ABABAB"}}>Maxim developed an educational program called 'Understanding Computing' where he helped students grow their knowledge in blockchain and cryptocurrency.
                He also manages private investments.
              </span> </p>
          <IconButton target="_blank" href="https://www.linkedin.com/in/maxim-s-245a86116/" color="primary">
              <LinkedInIcon />
            </IconButton>

            <IconButton target="_blank" href="https://maximsindall.com/" color="primary">
              <LanguageIcon />
            </IconButton>
          </div>

          <div className="col-md-3 p-3 col-12">
            <img className="team-images mb-3" style={{width: "100%"}} src="/images/maaheen.png"/>
            <h3>Maaheen Khan</h3>
            <h5 style={{fontWeight: "400", color: "#ABABAB"}}>Director of Marketing</h5>
              <p align={"left"}style={{fontSize: "0.9rem"}}><span style={{color: "#ABABAB"}}>Maaheen is the president of a marketing consulting company which has served over 200 clients in building their brand. She has over four years of administrative business experience and has been investing in cryptocurrency for over two years.
              </span> </p>
            <IconButton target="_blank" href="https://www.linkedin.com/in/maaheenkhan/" color="primary">
              <LinkedInIcon />
            </IconButton>
          </div>

          <div className="col-md-3 p-3 col-12">
            <img className="team-images mb-3" style={{width: "100%"}} src="/images/wang.png"/>
            <h3>LongHong Wang</h3>
            <h5 style={{fontWeight: "400", color: "#ABABAB"}}>Blockchain Developer</h5>
              <p align={"left"}style={{fontSize: "0.9rem"}}><span style={{color: "#ABABAB"}}>
                LongHong Wang is an experience senior blockchain and software engineer with over 7 years of professional experience. He is the Lead Developer at Chnoker.finance, a developer at Elixer-Swap and at Infraex development.
              </span> </p>
            <IconButton target="_blank" href="https://www.linkedin.com/in/wanglonghong/" color="primary">
              <LinkedInIcon />
            </IconButton>
            <IconButton target="_blank" href="https://github.com/wanglonghong" color="primary">
              <GitHubIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
