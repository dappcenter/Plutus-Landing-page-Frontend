import React, { useState, useEffect, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {IconButton} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

function Team(props) {
  return (
    <>
      <div className="container">
        <h1 className="airdrop-title">The Team</h1>
        <div className="row text-center justify-content-around">
          <div className="col-md-3 p-3 col-12">
            <img className="founder-image team-images mb-3" style={{width: "100%"}} src="/images/majd.jpg"/>
            <h3>Majd Hailat</h3>
            <h5 style={{fontWeight: "400", color: "#ABABAB"}}>Founder & Lead Developer</h5>
          <IconButton target="_blank" href="https://www.linkedin.com/in/majd-hailat-033389197/" color="primary">
            <LinkedInIcon />
          </IconButton>
          <IconButton target="_blank" href="https://github.com/majd64" color="primary">
            <GitHubIcon />
          </IconButton>
          </div>

          <div className="col-md-3 p-3 col-12">
            <img className="founder-image team-images mb-3" style={{width: "100%"}} src="/images/max.jpeg"/>
            <h3>Maxim Sindall</h3>
            <h5 style={{fontWeight: "400", color: "#ABABAB"}}>Co-Founder</h5>
            <IconButton target="_blank" href="https://www.linkedin.com/in/maxim-s-245a86116/" color="primary">
              <LinkedInIcon />
            </IconButton>
          </div>
          </div>

          <div className="row text-center justify-content-around">
          <div className="col-md-3 p-3 col-12">
            <img className="team-images mb-3" style={{width: "100%"}} src="/images/maaheen.png"/>
            <h3>Maaheen Khan</h3>
            <h5 style={{fontWeight: "400", color: "#ABABAB"}}>Marketing Director</h5>
            <IconButton target="_blank" href="https://www.linkedin.com/in/maaheenkhan/" color="primary">
              <LinkedInIcon />
            </IconButton>
          </div>

          <div className="col-md-3 p-3 col-12">
            <img className="team-images mb-3" style={{width: "100%"}} src="/images/expo.png"/>
            <h3>David Lopez</h3>
            <h5 style={{fontWeight: "400", color: "#ABABAB"}}>Market Strategist</h5>
              <IconButton target="_blank" href="https://www.linkedin.com/in/david-lopez-562a401b6/" color="primary">
                <LinkedInIcon />
              </IconButton>
          </div>

          <div className="col-md-3 p-3 col-12">
            <img className="team-images mb-3" style={{width: "100%"}} src="/images/andrew.jpg"/>
            <h3>Andrew Evanyshyn</h3>
            <h5 style={{fontWeight: "400", color: "#ABABAB"}}>Graphics & art director</h5>
          </div>
        </div>

      </div>
    </>
  );
}

export default Team;
