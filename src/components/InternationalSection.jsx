import React from 'react';
import Pic from '../assets/internationalPic.png'
import './InternationalSection.css'
import SubTitle from './SubTitle';
import Btn from './Btn';
const InternationalSection = () => {
    return ( <div className='container1'>
        <div className='Int-cont'>
            <img src={Pic} alt=""  />


        </div>

                    <div className='int-subcont'>
            <h2>
                CIB on an international scale
            </h2>

            <SubTitle name1 = 'Learn more about CIBs presence outside of Egypt'/>

            <Btn title='Learn more'/>
        </div>


    
    </div> );
}
 
export default InternationalSection;