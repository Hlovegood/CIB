import React, { Component } from 'react';
import './Wecare.css'
import OrangeTitle from './OrangeTitle';
import Hi from './Nav-title'
import Wecareimg1 from '../assets/WECAREIMG1.png'
import Wecareimg2 from '../assets/WECAREIMG2.png'
import Wecareimg3 from '../assets/WECAREIMG3.png'
import WecareCard from '../components/WecareCard'
const  WECARE= () => {
    return ( <>

<section className='WECAREMAIN'>

     <div className='Wecareholdingtitle'>
            <OrangeTitle title = ' Our dedicated team is committed to meeting your needs'/>
        <Hi name="We Care"/>
            </div>


<section className='WECAREHOLDINGCARDS'>

<WecareCard photo={Wecareimg1} CardTitle='Online' Cardsdesc="Chat with 'Zaki' our digital assistant to guide you through our products and services, or reach out on social media."/>

<WecareCard photo={Wecareimg2} CardTitle='On the phone' Cardsdesc="For support, including emergencies such as cards closure or immediate critical feedback"/>

<WecareCard photo={Wecareimg3} CardTitle='In branch' Cardsdesc="Our trained team of tellers and relationship managers are here to help you get the service you need."/>

</section>

</section>
    </> );
}
 
export default WECARE;