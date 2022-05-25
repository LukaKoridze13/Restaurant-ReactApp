import React from 'react'
import './Header.css'
import HomeIcon from './Images/home.png'
import MenuIcon from './Images/menu.png'
import ContactIcon from './Images/contact.png'
import AboutIcon from './Images/information.png'
import CartIcon from './Images/shopping-cart.png'
import { NavLink, Outlet } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <div className='header' id='header'>
                <nav>
                    <NavLink to='/' style={{ textDecoration: 'none' }}>
                        <div className='firstHome'>
                            <img src={HomeIcon} alt="Home Icon" className="homeicon" />
                            <p className='pageText'>Home</p>
                        </div>
                    </NavLink>
                    <NavLink to='/menu' style={{ textDecoration: 'none' }}>
                        <div className='firstHome'>
                            <img src={MenuIcon} alt="Menu Icon" className="homeicon" />
                            <p className='pageText'>Menu</p>
                        </div>
                    </NavLink>
                    <NavLink to='/contact' style={{ textDecoration: 'none' }}>
                        <div className='firstHome'>
                            <img src={ContactIcon} alt="Contact Icon" className="homeicon" />
                            <p className='pageText'>Contact</p>
                        </div>
                    </NavLink>
                    <NavLink to='/about' style={{ textDecoration: 'none' }}>
                        <div className='firstHome'>
                            <img src={AboutIcon} alt="About Icon" className="homeicon" />
                            <p className='pageText'>About</p>
                        </div>
                    </NavLink>

                </nav>
                <NavLink to='/shoppingcart' style={{ textDecoration: 'none' }}>
                    <div className='cart'>
                        <img src={CartIcon} alt="Cart Icon" className="homeicon" />
                        <p className='badge'>0</p>
                    </div>
                </NavLink>
            </div>
            <Outlet />
        </>

    )
}
