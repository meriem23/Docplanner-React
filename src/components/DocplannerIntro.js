import React from 'react';

const DocplannerIntro = props => {
    return (
        <div>
            <div className='titlePres'>
                <img src='https://www.docplanner.com/img/sygnet.png' alt='DocMiniLogo' />
                <h2 >Making the healthcare experience more human</h2>
            </div>
            <div className='introTextList'>
            {props.data.map(el => (
                    <p className='textPres'>{el.text}</p>
                ))}
            </div>
        </div>
    )
}
export default DocplannerIntro;
