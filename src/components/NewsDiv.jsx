import React from 'react';

const NewsDiv = (props) => {
    return ( <>
    
    <div className='div'>

        <div>
        <img src={props.img} alt="" />

        </div>

    <div>
        <div className='up'>
            <p>
                {props.uppertxt}
            </p>
        </div>

        <div className='mid'>
            <h3>
                {props.middletxt}
            </h3>
        </div>

        <div className='low'>
        <p>
            {props.lowertxt}
        </p>
        </div>
    </div>



    </div>
    
    </> );
}
 
export default NewsDiv;