import React, { useState, useEffect, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';

function Team(props) {
  return (
    <>
      <div className="container">
        <h1 className="airdrop-title">The Team</h1>
        <div className="row text-center">
          <div className="col-md-4 p-5 col-12">
            <img className="team-images mb-3" style={{width: "100%"}} src="/images/majd.jpg"/>
            <h3>Majd Hailat</h3>
            <h5 style={{fontWeight: "400", color: "#ABABAB"}}>Founder & Lead developer</h5>
          </div>
          <div className="col-md-4 p-5 col-12">
            <img className="team-images mb-3" style={{width: "100%"}} src="/images/max.jpeg"/>
            <h3>Maxim Sindall</h3>
            <h5 style={{fontWeight: "400", color: "#ABABAB"}}>Co-Founder</h5>
          </div>
          <div className="col-md-4 p-5 col-12">
            <img className="team-images mb-3" style={{width: "100%"}} src="/images/andrew.jpg"/>
            <h3>Andrew Evanyshyn</h3>
            <h5 style={{fontWeight: "400", color: "#ABABAB"}}>Graphic & art director</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
