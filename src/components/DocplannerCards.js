import React from 'react';


const DocplannerCards = props => {
    return (
<div className='docCards'>
{props.data.map(el =>
                el.options ?
                    <div className='patCard'>
                        <p className='patTitl'>{el.title}</p>
                        <h5 className='patText'>{el.text}</h5>
                        <br />
                        <div className='patImSel'>
                            <select className='countSelect'>
                                {el.options.map(el => <option>{el}</option>)}
                            </select>
                            <img src={el.imglink} alt='patient image' className='patLogo' />
                        </div>
                    </div>
                    :
                    <div className='docCard'>
                        <p className='docTitl'>{el.title}</p>
                        <h5 className='docText'>{el.text}</h5>
                        <img src={el.imglink} alt='doctor image' className='docLogo' />
                    </div>
            )}
    </div>
    )
}

export default DocplannerCards;
