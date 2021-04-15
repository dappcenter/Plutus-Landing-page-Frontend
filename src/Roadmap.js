import React, { useState, useEffect, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';
import {Card} from 'react-bootstrap/';

function Roadmap(props) {
  return (
    <>
      <div className="container">
        <h1 className="airdrop-title">Roadmap</h1>
        <br/>
        <br/>
        <div className="row">
          <div className="col-6" align="center">
            <Card align="left" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Phase 1</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">The Launch</Card.Subtitle>
                <Card.Text>
                  <li>Launch of website and social media channels</li>
                  <li>Token private sale</li>
                  <li>Token listing on Pancake swap and other DEXs</li>
                  <li>Launch of the MVP: A centralized NFT marketplace</li>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-6" align="center">
            <Card align="left" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Phase 2</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Building a playground</Card.Subtitle>
                <Card.Text>
                  <li>Launch of website and social media channels</li>
                  <li>Token private sale</li>
                  <li>Token listing on Pancake swap and other DEXs</li>
                  <li>Launch of the MVP: A centralized NFT marketplace</li>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>


        <br/>
        <br/>

        <div className="row">
          <div className="col-4">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Phase 1</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">The Launch</Card.Subtitle>
                <Card.Text>
                  <li>Launch of website and social media channels</li>
                  <li>Token private sale</li>
                  <li>Token listing on Pancake swap and other DEXs</li>
                  <li>Launch of the MVP: A centralized NFT marketplace</li>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-4">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Phase 1</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">The Launch</Card.Subtitle>
                <Card.Text>
                  <li>Launch of website and social media channels</li>
                  <li>Token private sale</li>
                  <li>Token listing on Pancake swap and other DEXs</li>
                  <li>Launch of the MVP: A centralized NFT marketplace</li>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-4">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Phase 1</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">The Launch</Card.Subtitle>
                <Card.Text>
                  <li>Launch of website and social media channels</li>
                  <li>Token private sale</li>
                  <li>Token listing on Pancake swap and other DEXs</li>
                  <li>Launch of the MVP: A centralized NFT marketplace</li>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Roadmap;
