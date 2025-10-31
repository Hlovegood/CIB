import React from 'react';
import OrangeTitle from './OrangeTitle';
import NewsDiv from './NewsDiv';
import Hero from '../assets/NewsPic.png'
import './NewsDiv.css'
import './NewsSection.css'
import Btn from './Btn';
const NewsSection = () => {
    return ( <div className='div1'>

    <OrangeTitle title ='News'/>


<div className='card-cont'>
     <NewsDiv img = {Hero} uppertxt = '08/10/2025 - Commercial International Bank (CIB) Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion '  
    middletxt = 'Commercial International Bank (CIB) Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion'
    lowertxt = 'CIB, Egypts leading and largest private sector bank, has successfully partnered with CI Capital to complete the seventh issuance for Halan Consumer Finance, valued at EGP 3.4 billion.'/>

        <NewsDiv img = {Hero} uppertxt = '08/09/2025 - Commercial International Bank (CIB) Successfully Closes EGP 2.3 Billion Securitization Bond Issuance for GlobalCorp Financial Services '  
    middletxt = 'Commercial International Bank (CIB) Successfully Closes EGP 2.3 Billion Securitization Bond Issuance for GlobalCorp Financial Services'
    lowertxt = 'CIB, Egypt’s leading and largest private-sector bank, has successfully completed its seventh securitization bond issuance for GlobalCorp Financial Services, worth EGP 2.3 billion. '/>

    <NewsDiv img = {Hero} uppertxt = '21/08/2025 - Commercial International Finance Company (CIFC) Records EGP 4.1 billion in Its First Year of Operations'  
    middletxt = '4.1 billion in Its First Year of Operations Records EGP 4.1 billion in Its First Year of Operations'
    lowertxt = 'CIB, Egypt’s leading and largest private-sector bank is pleased to announce that its subsidiary, CIFC, has delivered remarkable results since its inception in April 2024. '/>
</div>
   

        <Btn title= 'View All News'/>
    
    </div> );
}
 
export default NewsSection;