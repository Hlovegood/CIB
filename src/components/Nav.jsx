import React from 'react';
import logo from '../assets/Logo.png';

import Hi from './Nav-title.jsx';

import './Nav.css';


const Nav = () => {
    return ( <nav className='nav'>

        <img src={logo} alt=""  className='img'/>

        <div className='nav'>
            <Hi name = "About Us"/>

            <Hi name = "Investor Realtions"/>

            <Hi name = "Responsible Banking"/>

            <Hi name = "Newsroom"/>

            <Hi name = "Learning Center"/>

            <Hi name = "Careers"/>

            <Hi name = "Others"/>


            
        </div>
    </nav> );
}
 
export default Nav;