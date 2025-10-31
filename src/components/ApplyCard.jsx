import React from 'react';
const ApplyCard = (props) => {
    return ( <>
    
        <div className='card'>
        <img src={props.img} alt="" />
        {props.title}
    </div>
    
    </> );
}
 
export default ApplyCard;