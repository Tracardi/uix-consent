import React from 'react';
import "./PoweredBy.css";

export default function PoweredBy() {
    console.log(window.innerWidth)
    return <span className="PoweredBy">Powered by <a href="http://www.tracardi.com" style={{color: "black"}}>TRACARDI</a></span>
}