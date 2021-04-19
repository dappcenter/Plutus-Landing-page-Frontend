import React, { useState, useEffect, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';
import { Document } from 'react-pdf'

function Whitepaper(props) {
  return (
    <>
    <div style={{width: "100%", height: "100vh"}}>
      <embed src="/whitepaper.pdf" width="100%" height="100%" />
    </div>
    </>
  );
}

export default Whitepaper;
