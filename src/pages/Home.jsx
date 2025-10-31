import React, { Component } from 'react';
import Nav from '../components/Nav';
import './Home.css';
import Heropic from '../components/Heropic';
import ApplySection from '../components/ApplySection';
const Home = () => {
    return ( <div>
        <Nav/>
        <Heropic/>
        <ApplySection/>
    </div> );
}
 
export default Home;