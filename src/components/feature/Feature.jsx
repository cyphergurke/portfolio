import React from 'react'
import './feature.css';


export const Feature = ({ link, title, text }) => {
    return (
        <div className='dweb__features-container__feature'>
            <div className='dweb__features-container__feature-title'>
                <div />
                <a href={link}><h1> {title}</h1> </a>
            </div >
            <div className='dweb__features-container_feature-text'>
                <a href={link}><p>{text}</p></a>

            </div>
        </div >
    )
}
