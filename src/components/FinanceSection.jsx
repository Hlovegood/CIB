import React from 'react';
import SubTitle from './SubTitle';
import OrangeTitle from './OrangeTitle';
import FinanceDiv from './FinanceDiv';
import Exchange from '../assets/ExhangeIcon.png'
import BloomBerg from '../assets/BloomBergIcon.png'
import FT from '../assets/FTIcon.png'
import './FinanceSection.css'


const FinanceSection = () => {
    return ( <div className='FinanceSec'>
    <SubTitle name1 ='Sustainable finance'/>

    <OrangeTitle title =' Sustainability is an integral part of the way we work'/>

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
    

    
    </div> );
}
 
export default FinanceSection;