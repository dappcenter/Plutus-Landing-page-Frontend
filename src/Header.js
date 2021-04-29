 import React, { useState, useEffect, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';
import {IconButton} from '@material-ui/core';
import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
function Header(props) {
  return (
    <>
    <section class="header py-5 text-white">
      <div className="header-spacing">
        <br/>
        <br/>
      </div>

        <div class="container-fluid py-4">
          <div class="row">
            <div class="col-lg-8 mx-auto text-center">
              <h6 class="mb-4 welcome-to-aux">WELCOME TO ALTURA</h6>

              <h1 class="title">Where Blockchain <br/> Meets Gaming</h1>
              <p class="mt-5 lead mb-0 description"> Altura is the next generation gaming NFT platform </p>

              <br/>
              <br/>
              <br/>
              <div>
                <IconButton style={{color: "white", fontSize: "2rem"}} target="_blank" href="https://t.me/alturanft" color="white">
                     <TelegramIcon/>
                  </IconButton>

                  <IconButton style={{color: "white", fontSize: "2rem"}} target="_blank" href="https://github.com/organizations/Plutus-Gaming-NFTs-Reimagined/settings/profile" color="white">
                     <GitHubIcon/>
                  </IconButton>

                  <IconButton style={{color: "white", fontSize: "2rem"}} target="_blank" href="https://www.instagram.com/Altura.nft/" color="white">
                     <InstagramIcon/>
                  </IconButton>

                  <IconButton style={{color: "white", fontSize: "2rem"}} target="_blank" href="https://twitter.com/altura_nft" color="white">
                     <TwitterIcon/>
                  </IconButton>
              </div>




            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Header;
