import React, { Component } from 'react';
import Nav from '../components/Nav';
import './Home.css';
import Heropic from '../components/Heropic';
import ApplySection from '../components/ApplySection';
import NewsSection from '../components/NewsSection';
const Home = () => {
    return ( <div>
        <Nav/>
        <Heropic/>
        <ApplySection/>
        <NewsSection/>
    </div> );
}
 
export default Home;