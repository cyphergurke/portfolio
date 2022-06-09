import React from 'react';
import './footer.css';

import logo from '../../assets/GPT-3.svg'

export const Footer = () => {
    return (
        <div className='dweb__footer section__padding'>
            <div className='dweb__footer-heading'>
                <h1 className='gradient__text'> Do you want to step in to the future before others</h1>
            </div>
            <div className='dweb__footer-btn'>
                <p onClick={() => window.location = 'mailto:david@bitcoin-uni.de'} >Contact</p>

            </div>
            <div className='dweb__footer-links'>
                <div className='dweb__navbar-links_logo'>
                    <h1 >dweb</h1>
                    <h2>dezentralize IT</h2>
                </div>
                <div className='dweb__footer-links_div'>
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>

                <div className='dweb__footer-links_div'>
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>

                </div>
                <div className='dweb__footer-links_div'>
                    <h4>Get in touch</h4>
                    <p>Crechterwoord K12 182 DK Alknjkcb</p>
                    <p>085-132567</p>
                    <p>info@dweb.ens</p>

                </div>
                <div className='dweb__footer-copyright'>
                    <p>@ 2022 No rights reserved</p>
                </div>
            </div>
        </div>
    )
}
