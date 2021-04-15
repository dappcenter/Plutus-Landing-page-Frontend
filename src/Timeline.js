import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import React, { useState, useEffect, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';
import {Card} from 'react-bootstrap/';

function Timeline(props) {
  return (
    <>
      <div className="">
        <h1 className="pb-5 text-center airdrop-title">Roadmap</h1>
         <VerticalTimeline>

           <VerticalTimelineElement
             className="vertical-timeline-element--work"
             iconStyle={{ background: '#00FF00', color: '#fff' }}>
             <h3 className="vertical-timeline-element-title">Phase 1</h3>
             <h4 className="vertical-timeline-element-subtitle">The Launch</h4>
             <p>
              <li>Launch of website and social media channels</li>
              <li>Token private sale</li>
              <li>Token listing on Pancake swap and other DEXs</li>
              <li>Launch of the MVP: A centralized NFT marketplace</li>
             </p>
           </VerticalTimelineElement>

           <VerticalTimelineElement
             className="vertical-timeline-element--work"
             iconStyle={{ background: '#99ff00', color: '#fff' }}>
             <h3 className="vertical-timeline-element-title">Phase 2</h3>
             <h4 className="vertical-timeline-element-subtitle">Building a playground</h4>
             <p>
             <p>MVP Iteration </p>
              <li>Allowing the PLU token to be used as currency </li>
              <li>Introduction of loot crates Token private sale</li>
              <li>Introduction of smart NFTs</li>
              <li>Building an API </li>

              <p>Research and development</p>
               <li>How can we build the best possible Smart NFTs</li>
               <li>What other use cases can we expand to </li>

               <p>Team expansion</p>
                <li>Hiring more developers</li>
             </p>
           </VerticalTimelineElement>

           <VerticalTimelineElement
             className="vertical-timeline-element--work"
             iconStyle={{ background: '#FFFF00', color: '#fff' }}>
             <h3 className="vertical-timeline-element-title">Phase 3</h3>
             <h4 className="vertical-timeline-element-subtitle">Product development</h4>
             <p>
              <li>Introduce a gaming focused decentralized NFT marketplace</li>
              <li>Introduce loot crates that use smart oracles for RNG</li>
              <li>Introduce the first iteration of Smart NFTs</li>
              <li>Further research and development around programmable and dynamic Smart NFTs</li>
              <li>Introduction of SDKs and APIs</li>
              <li>Strategies a marketing and adoption plan</li>
            </p>
           </VerticalTimelineElement>

           <VerticalTimelineElement
             className="vertical-timeline-element--work"
             iconStyle={{ background: '#ff6600', color: '#fff' }}>
             <h3 className="vertical-timeline-element-title">Phase 4</h3>
             <h4 className="vertical-timeline-element-subtitle">Adoption and expansion</h4>
             <p>
              <li>Further research and development on smart NFT use cases</li>
              <li>Further product development and iteration </li>
              <li>Introduce our own gaming NFT use cases</li>
              <li>Have indie game developers adopt Plutus in their video-games</li>
              <li>Expand marketing efforts </li>
             </p>
           </VerticalTimelineElement>

           <VerticalTimelineElement
             className="vertical-timeline-element--work"
             iconStyle={{ background: '#FF0000', color: '#fff' }}>
             <h3 className="vertical-timeline-element-title">Phase 5</h3>
             <h4 className="vertical-timeline-element-subtitle">Further adoption and expansion</h4>
             <p>
              <li>Have major gaming companies utilize our SDKs and APIs</li>
              <li>Have major gaming companies roll out NFTs on Plutus </li>
              <li>Token listing on Pancake swap and other DEXs</li>
              <li>Further marketing and expansion</li>
             </p>
           </VerticalTimelineElement>


         </VerticalTimeline>
      </div>
    </>
  );
}

export default Timeline;
