import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import View from 'react';

const DocplannerCountries = props => {
    return (
        <div style={{ flex: 1, flexDirection: 'row' }}>
            <div>
                <h3 className='textOne'>Improve the lives of millions.<br /> Change yours forever</h3>
                <p className='textTwo'>More than 1000 team mates share our same vision, goals and passion.<br /> With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and<br /> Curitiba, our search for great talent never stops.</p>
            </div>
            <div className='Cards'>
            {props.data.map(el =>
                <div className='card'>
                    <img src={el.imgctrlink} alt='Country Image' className='ctrImg' />
                    <div className='contList'>
                        <p className='ctrName'>{el.title}</p>
                        <Button className='btn-primary'>See Openings</Button>
                    </div>
                </div>)}
               </div> 
        </div>
    )
}

export default DocplannerCountries
