import React from 'react';

const DocplannerNavBar = props => {
    return (
        <ul style={{ listStyleType: 'none' }} className='docplannerNavbar'>
            <div>
                <img src='https://www.docplanner.com/img/logo-default-group-en.svg?v=1' alt='DocplannerLogo' className='logoNav' />
            </div>
            <div className="navItems">
                {props.data.map(el => (
                el.subMenu ?
                    <div className='hovMenu'>
                        <div className='hovSubMenu'>
                            <a className='linkStyle' href={el.link}>
                                {el.title}
                            </a>
                        </div>
                        <ul style={{ listStyleType: 'none' }} className='hovSubMenuItems'>
                            {el.subMenu.map(el => <li>{el}</li>)}
                        </ul>
                    </div>
                    : <li>
                        <div >
                            <a className='linkStyle' href={el.link}>
                                {el.title}
                            </a>
                        </div>
                    </li>
            ))}
            </div>
            
        </ul>
    )
}

export default DocplannerNavBar;