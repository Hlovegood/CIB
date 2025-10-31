import React, { Component } from 'react';
import './Btn.css'
const Btn = (props) => {
    return ( <>
    <button>
        {props.title}
    </button>
    
    </> );
}
 
export default Btn;