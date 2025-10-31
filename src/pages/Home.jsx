import React, { Component } from 'react';
import Nav from '../components/Nav';
import './Home.css';
import Heropic from '../components/Heropic';
import ApplySection from '../components/ApplySection';
import NewsSection from '../components/NewsSection';
import InternationalSection from '../components/InternationalSection';
import LearningCenter from './../components/LearningCenter';
import FinanceSection from '../components/FinanceSection';
const Home = () => {
    return ( <div>
        <Nav/>
        <Heropic/>
        <ApplySection/>
        <LearningCenter/>
        <NewsSection/>
        <InternationalSection/>
        <FinanceSection/>
    </div> );
}
 
export default Home;