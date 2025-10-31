import React from 'react';
import SubTitle from './SubTitle';
import OrangeTitle from './OrangeTitle';
import FinanceDiv from './AwardsDiv';
import Exchange from '../assets/Money Icon.png'
import BloomBerg from '../assets/Rank Icon.png'
import FT from '../assets/Refresh Icon.png'
import './AwardsSection.css'
import Btn from './Btn';


const FinanceSection = () => {
    return ( <div className='FinanceSec'>

        <div className='headertxt'>
    <SubTitle name1 ='Awards'/>
    <OrangeTitle title ='  CIBs integrity and quality are recognized internationally'/>            
        </div>


    <div className='IconsSec'>
    <div>
        <FinanceDiv img={Exchange} txt='Best Private Bank in Egypt' sub = 'Global Finance - 2023'/>
    </div>

    <div>
        <FinanceDiv img={BloomBerg} txt='Best Mergers & Acquisitions Deal in MENA'   sub = 'EMEA Finance - 2023'/>

    </div>

    <div className='Icon-cont'>
        <FinanceDiv img={FT} txt='Best Bank in Egypt'  sub = 'Euromoney - 2023'/>

    </div>

    </div>
    
        <Btn title ='See all our awards'/>
    
    </div> );
}
 
export default FinanceSection;