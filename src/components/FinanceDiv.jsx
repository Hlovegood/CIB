import React, { Component } from 'react';
import './FinanceDiv.css'
const FinanceDiv = (props) => {
    return ( <>
       <div className='Icon-cont'>
        <img src={props.img} alt="" />
        <p>
            {props.txt}
        </p>
        </div> 


    </> );
}
 
export default FinanceDiv;