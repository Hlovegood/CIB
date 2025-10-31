import React from 'react';
import SubTitle from './SubTitle';
import OrangeTitle from './OrangeTitle';
import FinanceDiv from './FinanceDiv';
import Exchange from '../assets/ExhangeIcon.png'
import BloomBerg from '../assets/BloomBergIcon.png'
import FT from '../assets/FTIcon.png'
import './FinanceSection.css'
import Btn from './Btn';


const FinanceSection = () => {
    return ( <div className='FinanceSec'>

        <div className='headertxt'>
    <SubTitle name1 ='Sustainable finance'/>

    <OrangeTitle title =' Sustainability is an integral part of the way we work'/>            
        </div>


    <div className='IconsSec'>
    <div>
        <FinanceDiv img={Exchange} txt='S&P/EGX ESG Index'/>
    </div>

    <div>
        <FinanceDiv img={BloomBerg} txt='Bloomberg Gender Equality Index'/>

    </div>

    <div className='Icon-cont'>
        <FinanceDiv img={FT} txt='FTSE4Good Index'/>

    </div>

    </div>
    
        <Btn title ='Learn More'/>
    
    </div> );
}
 
export default FinanceSection;