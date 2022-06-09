import React, { useState } from 'react'
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

//import logo from '../../assets/GPT-3.svg';


const Menu = () => (
    <>
        <p><a href="#home">Home</a></p>
        <p><a href="#possibility">Technologies</a></p>
        <p><a href="#whpt3">What is dweb</a></p>
        <p><a href="#features">Projects</a></p>
        <p><a href="#blog">Library</a></p>
    </>
)



export const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);



    // <img src={logo} alt='logo' />

    return (
        <div className='dweb__navbar'>
            <div className='dweb__navbar-links'>
                <div className='dweb__navbar-links_logo'>
                    <h1 >dweb</h1>
                    <h2>dezentralize IT</h2>
                </div>
                <div className='dweb__navbar-links_container'>
                    <Menu />
                </div>

            </div>
            <div className='dweb__navbar-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
            </div>
            <div className='dweb__navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='dweb__navbar-menu_container scale-up-center'>
                        <div className='dweb__navbar-menu_container-links'>
                            <div>
                                <Menu />
                            </div>
                            <div className='dweb__navbar-menu_container-links-sign'>
                                <p>Sign in</p>
                                <button type='button'>Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>

    )
}
