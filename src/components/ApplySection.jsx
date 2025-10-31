import React from 'react';
import Navtitle from './Nav-title'
import './ApplySection.css'
import ApplyCard from './ApplyCard';
import './ApplyCard.css'
import Visa from '../assets/Visa Icon.png'
import CIB from '../assets/CIB Icon.png'
import Loan from '../assets/Loan Icon.png'
import OrangeTitle from './OrangeTitle';
import SubTitle from './SubTitle';
const ApplySection = () => {
    return ( <div className='container'>
    <div className='apply-cont'>
        <Navtitle name='Apply Online'/>
        <Navtitle name='News'/>
        <Navtitle name='Blog Articles'/>
        <Navtitle name='CIB International'/>
        <Navtitle name='Sustaniable Finance'/>
        <Navtitle name='Awards'/>

    </div>

        <div className='apply-cont2'>

            <div>

            <SubTitle name1= 'Apply Now'/>


            <OrangeTitle title = ' Apply online now for cards and loans with ease!'/>

            </div>
                
        </div>

            <div className='cards'>
            <ApplyCard title='Apply for a New Account' img= {CIB} />
            <ApplyCard title='Apply for a card' img= {Visa} />
            <ApplyCard title='Apply for a card' img= {Loan} />

            </div>



    </div> );
}
 
export default ApplySection;