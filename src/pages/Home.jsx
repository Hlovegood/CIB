import React, { Component } from 'react';
import Nav from '../components/Nav';
import './Home.css';
import Heropic from '../components/Heropic';
import ApplySection from '../components/ApplySection';
import NewsSection from '../components/NewsSection';
import InternationalSection from '../components/InternationalSection';
import LearningCenter from './../components/LearningCenter';
import FinanceSection from '../components/FinanceSection';
import AwardsSection from '../components/AwardsSection';
import Wecare from '../components/Wecare';
import Footer from '../components/Footer';
const Home = () => {
    return ( <div>
        <Nav/>
        <Heropic/>
        <ApplySection/>
        <LearningCenter/>
        <NewsSection/>
        <InternationalSection/>
        <FinanceSection/>
        <AwardsSection/>
        <Wecare/>
        <Footer/>
    </div> );
}
 
export default Home;