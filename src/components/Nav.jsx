import React from 'react';
import logo from '../assets/Logo.png';

const Nav = () => {
    return ( <nav>
        <img src={logo} alt="" />
        <div>
            <p>
                Home
            </p>
        </div>
    </nav> );
}
 
export default Nav;