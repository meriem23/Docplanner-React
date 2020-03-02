import React from 'react'


const DocplannerStatItems = props => {
    return (
        <div className={props.index % 2 === 0 ? 'statItems statItemsD' : 'statItems' }>
            <img src={props.data.logoLink} alt='logo' className="statLogo" />
            <h5 className='statTitle'>{props.data.title}</h5>
            <p className='statText'>{props.data.text}</p>
                </div>
            )
        }
export default DocplannerStatItems;