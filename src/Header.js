import React, { useState, useEffect, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';
// <h1 className="title">Where Blockchain <br/> Meets Gaming</h1>

function Header(props) {
  return (
    <>
    <section class="header py-5 text-white">
        <br/>
        <br/>
        <br/>
        <br/>
        <div class="container-fluid py-4">
          <div class="row">
            <div class="col-lg-8 mx-auto text-center">
              <h6 class="mb-4 welcome-to-aux">WELCOME TO PLUTUS</h6>

              <h1 class="title">Where Blockchain <br/> Meets Gaming</h1>
              <p class="mt-5 lead mb-0 description"> Plutus is the next generation smart-gaming NFT platform </p>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Header;
