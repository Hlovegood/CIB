import React, { Component } from 'react';
import Hero from '../assets/Hero Pic.png'
import '../components/Heropic.css'
import Btn from './Btn';
const Heropic = () => {
    return ( 
        <div className='hero-cont'>

            <div className='hero-txt'>
            <h1>
                CIB
            </h1>

            <p className='hero-r8y'>
                Delivering value to our clients, our community and our shareholders
            </p>

            <Btn title = 'Discover more'/>
            </div>
    

        <img src={Hero} alt="" className='Hero-sec'/>

        </div>
     );
}
 
export default Heropic;