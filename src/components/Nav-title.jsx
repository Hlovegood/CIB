import React, { Component } from 'react';
import './Nav-title.css'
const title = (Props) => {
    return ( 
        <p className='p'>
            {Props.name}
        </p>
     );
}
 
export default title;