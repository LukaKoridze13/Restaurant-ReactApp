import React, { useState, useContext, useRef } from 'react'
import './Header.css'
import HomeIcon from './Images/home.png'
import MenuIcon from './Images/menu.png'
import ContactIcon from './Images/contact.png'
import AboutIcon from './Images/information.png'
import CartIcon from './Images/shopping-cart.png'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { Context } from './Context';
import CurrencyButton from './CurrencyButton'
import Login from './Login'
import 'bootstrap/dist/css/bootstrap.css'
export default function Header() {
    let global = useContext(Context)
    let navigate = useNavigate()
    function account() {
        if (global[18] === 'Log Out') {

            return (
                <div className='profile' style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#d78922', borderRadius: '30px', cursor: 'pointer' }} onClick={() => { navigate('/Restaurant-ReactApp/profile')}}>
                        <img style={{ width: '40px', height: '40px', borderRadius: '50%', border: "1px solid black" }} src={global[22][3]} />
                        <p style={{ fontWeight: "bold", marginLeft: '10px', marginRight: '10px' }}>{global[22][0]}</p>
                    </div>
            )


        }
    }
    return (
        <>
            <div className='header' id='header' style={{ position: 'relative' }}>
                <nav>
                    <NavLink to='/Restaurant-ReactApp/' style={{ textDecoration: 'none' }}>
                        <div className='firstHome'>
                            <img src={HomeIcon} alt="Home Icon" className="homeicon" />
                            <p className='pageText'>Home</p>
                        </div>
                    </NavLink>
                    <NavLink to='/Restaurant-ReactApp/menu' style={{ textDecoration: 'none' }}>
                        <div className='firstHome'>
                            <img src={MenuIcon} alt="Menu Icon" className="homeicon" />
                            <p className='pageText'>Menu</p>
                        </div>
                    </NavLink>
                    <NavLink to='/Restaurant-ReactApp/contact' style={{ textDecoration: 'none' }}>
                        <div className='firstHome'>
                            <img src={ContactIcon} alt="Contact Icon" className="homeicon" />
                            <p className='pageText'>Contact</p>
                        </div>
                    </NavLink>
                    <NavLink to='/Restaurant-ReactApp/about' style={{ textDecoration: 'none' }}>
                        <div className='firstHome'>
                            <img src={AboutIcon} alt="About Icon" className="homeicon" />
                            <p className='pageText'>About</p>
                        </div>
                    </NavLink>

                </nav>
                <div className='rightside'>
                    <CurrencyButton />
                    <Login />
                    <NavLink to='/Restaurant-ReactApp/shoppingcart' style={{ textDecoration: 'none' }} className='a'>
                        <div className='cart'>
                            <img src={CartIcon} alt="Cart Icon" className="homeicon" />
                            <p className='badge'>{global[0]}</p>
                        </div>
                    </NavLink>
                    {account()}

                </div>
            </div>
            <Outlet />
        </>

    )
}
