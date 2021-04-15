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
            Imagine a trading card of your favorite soccer player that gets upgraded every time the player scores a goal in the real world or a video game sword that gets duller every time it is used to slay a monster. Smart NFTs have dynamic and static properties that change based on a game developer's function call or based on real-world data.
           </h5>
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
            We want to create truly random loot crates on the blockchain. These loot crates will be tradable NFTs themselves, and game developers can set the rules for how they are unlocked, what NFTs can be dropped, the rarity of each NFT, and can even mint dynamic NFTs on the spot when the loot crate is opened.
           </h5>
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
Plutus wants gamers to be able to use the same in-game items between multiple video games. Although the developer can give their own animations, art style and functionality to that item, the underlying item, or NFT, will still be the exact same. Additionally, smart-NFTs can be access controlled.           </h5>
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
