import React from 'react'
import DocplannerStatItems from './DocplannerStatItems'

 const DocplannerStat = props => {
    return (
        <div className='sidesItems'>
          <div className='sideOne'>
              <div className='sideOneText'>
              <h6 className='sideTitle'>The world's <br /> biggest healthcare platform</h6>
                <p className='sideText'>We work from 6 offices all over the world, bringing Docplanner <br />Group to life in almost 20 countries.</p>
              </div>
                <img src='https://www.docplanner.com/img/logo.png' alt='logo' className='sideLogo' />
            </div>  
            <div  className='sideTwo'>
                {props.data.map((el , index)=> <DocplannerStatItems data={el} index={index}/>)}
            </div>
        </div>
    )
}
export default DocplannerStat;