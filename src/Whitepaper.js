import React, { useState, useEffect, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';
import { Document } from 'react-pdf'

function Whitepaper(props) {
  return (
    <>


    <div style={{width: "100%", height: "100vh"}}>
      <object data="/whitepaper.pdf" type="application/pdf" width="100%" height="100%">
        <p>Your web browser doesn't have a PDF plugin.
        Instead you can <a href="/whitepaper.pdf">click here to
        download the PDF file.</a></p>
      </object>
    </div>
    </>
  );
}

export default Whitepaper;
