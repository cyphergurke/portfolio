import React from 'react'
import './cta.css';

export const CTA = () => {
    return (
        <div className='dweb__cta'>
            <div className='dweb__cta-content'>
                <p> </p>
                <h3>Contact today & start exploring the endless possiblities.</h3>
            </div>
            <div className='dweb__cta-btn'>
                <button onClick={() => window.location = 'mailto:david@bitcoin-uni.de'} type="button">Get Startet</button>
            </div>
        </div>
    )
}
