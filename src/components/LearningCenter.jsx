import React, { Component } from 'react';
import './LearningCenter.css'
import OrangeTitle from './OrangeTitle';
import Hi from './Nav-title.jsx';
import LearningCCards from './LCcards'
import './LCcards.css'
import LearnCimg1 from '../assets/LCCard1.png'
import LearnCimg2 from '../assets/LCCard2.png'
import LearnCimg3 from '../assets/LCCard3.png'
const LearningCenter = () => {
    return ( <>
<section className='learningCenterMain'>


            <div>
            <OrangeTitle title = 'Learning Center'/>
        <Hi name="Learn more about banking and your finances"/>
            </div>



<div className='HoldingCardsDiv'>

<LearningCCards img={LearnCimg1} title='Buying and making a home' sub='Buying a home can be an emotional process, but its important to approach it logically'/>


<LearningCCards img={LearnCimg2} title='Traveling on a budget' sub='So for all of you travelers, take a vacation without spending a fortune with these helpful tips and tricks'/>


<LearningCCards img={LearnCimg3} title='University life tips' sub='The impact of a good education can be transformative.'/>




</div>


</section>
    </> );
}
 
export default LearningCenter;