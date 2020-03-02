import React from 'react';


const DocplannerFooter = props => {
    return (
        <div>
            <hr />
            <div className='footerList'>
                <p > We are leaders in 10 countries:</p>
                {props.data.map(el =><p className='footerText'>{el.ConName}</p>)}
            </div>
        </div>
    )
}

export default DocplannerFooter;