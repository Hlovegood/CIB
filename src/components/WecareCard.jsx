import React, { Component } from 'react';
import './WecareCard.css'

const WecareCardComp = (props) => {
    return ( <>
<section className='WecareCard'>

<img src={props.photo} alt=''/>



<section className='CardHoldingContent'>

<h1 className='CardTT'>{props.CardTitle}</h1>

<p className='CardDesc'>{props.Cardsdesc}</p>

</section>




</section>
    </> );
}
 
export default WecareCardComp;