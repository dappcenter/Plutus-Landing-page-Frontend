import React, { useState, useEffect, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';

function Details(props) {
  return (
    <>
    <br/>
      <br/>
      <br/>
      <br/>

      <div className=" container">
      <div className="details row">
        <div className="align-self-center col-md-7 col-12">
        <h1 className="details-title">Smart NFTs</h1>
          <h5 className="detail-para">
            Imagine a video game sword that gets duller every time it is used to slay a monster. Smart NFTs have properties that can change based on certain conditions.           </h5>
        </div>
        <div className="col align-self-center col-md-5 col-12">
          <img style={{width: "90%"}} src="/images/sword.png"/>
        </div>
      </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className=" container">
      <div className="details row" style={{textAlign: "right"}}>
        <div className="align-self-center col-md-7 col-12 order-md-12">
        <h1 className="details-title">Loot Boxes Reimagined</h1>
          <h5 className="detail-para">
We want to create truly random loot boxes on the blockchain that drop NFTs with varying rarities when they are unlocked.           </h5>
        </div>

        <div className="col align-self-center col-md-5 col-12 order-md-1">
          <img style={{width: "90%"}} src="/images/lootbox.png"/>
        </div>

      </div>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className=" container">
      <div className="details row">
        <div className="align-self-center col-md-7 col-12">
        <h1 className="details-title">Cross-Platform Items</h1>
          <h5 className="detail-para">
Altura wants gamers to be able to use the same in-game items between multiple video games.  </h5>
        </div>
        <div className="col align-self-center col-md-5 col-12">
          <img  style={{width: "90%"}} src="/images/controller.png"/>
        </div>
      </div>
      </div>





    </>
  );
}

export default Details;
