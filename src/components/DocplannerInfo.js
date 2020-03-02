import React from 'react'

const DocplannerInfo = props => {
    return (
        <div className='docInfo'>
            <h5 className='docTitle'>We are a global<br/> company <br/>with local culture</h5>
            {props.data.map(el =>
                <div className='tiltLogo'>
                    <img src={el.logo} alt='logo' className='doctLogo' style={{float:'left'}}/>
                    <h5 className='titl'style={{float:'right'}}>{el.title}</h5>
                </div>
            )}
        </div>
    )
}

export default DocplannerInfo 
