import React, { Component } from 'react';
import './OrangeTitle.css'
const OrangeTitle = (props) => {
    return ( <>
    
    <h1 className='name'>
        {props.title}
    </h1>

    </> );
}
 
export default OrangeTitle;