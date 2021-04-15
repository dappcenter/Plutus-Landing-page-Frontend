import React, { useState, useEffect, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';

function Mission(props) {
  return (
    <>
      <div className=" container">
      <div className="what-are-we row">
        <div className="align-self-center">
        <h1 className="airdrop-title">What is Plutus</h1>
          <h5 className="what-are-we-desc">
            Plutus is an interface that allows game developers to create smart in-game items on the blockchain. Developers have the freedom to mint fungible, non-fungible, tradable, non-tradable, finite, or infinite in-game items which they can integrate into their games using our custom SDK. In-game items on the blockchain mean that gamers have the right to own their in-game items and use them wherever they can be used. Gamers can freely trade their items or exchange them for real-world currency. Developers can also program custom functionality into their items such as deterioration. We want to ensure that decentralized in-game items don’t take away from a developer's monetary success, and want to ensure those game developers can still earn revenue from their in-game items, even after they are sold.
           </h5>
        </div>
      </div>

      </div>
    </>
  );
}

export default Mission;
