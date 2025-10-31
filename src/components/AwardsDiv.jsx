import React, { Component } from 'react';
import './AwardsDiv.css'
const FinanceDiv = (props) => {
    return ( <>
       <div className='Icon-cont'>
        <img src={props.img} alt="" />
        <p>
            {props.txt}
        </p>


        <p className='subtxt'>
            {props.sub}
        </p>
        </div> 


    </> );
}
 
export default FinanceDiv;