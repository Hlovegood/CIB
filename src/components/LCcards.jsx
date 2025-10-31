import React, { Component } from 'react';
import './LCcards.css'
const  LearningCards= (props) => {
    return ( 
        <>
        <div className='card2'>
        <img src={props.img} alt="" className='CardIMG'/>

        <div className='Cardtext'>
        <h1 className='CardTitle'>{props.title}</h1>
        <p className='CardSub'>{props.sub}</p>
        </div>
        
    </div>
        </>
     );
}
 
export default LearningCards;