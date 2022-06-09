import React from 'react';
import './header.css';

import people from '../../assets/people.png';
import ai from '../../assets/ai.png';


export const Header = () => {
    return (
        <div className='dweb__header section__padding' id='home'>
            <div className='dweb__header-content'>
                <h1 className='gradient__text'>Let’s Build amazing dApps</h1>

                <h2 className='gradient__text'>This is just a personal Portfolio Website!</h2>
                <p>The decentralized IT infrastructure is based on blockchain technology, which makes it possible to develop decentralized applications that never existed before inventions like Bitcoin.</p>



            </div>
            <div className='dweb__header-image'>
                <img src={ai} alt="ai" />
            </div>
        </div>
    )
}

/**
 * 
 * <div className='dweb__header-content__input'>
                    <input type="email" placeholder="Your EMail Address" />
                    <button type='button'>Get Startet</button>
                </div>
 */