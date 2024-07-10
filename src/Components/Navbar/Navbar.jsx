import React from 'react'
import './Navbar.css'
import logo from './../../assets/images/logo.svg'
import { NavLink, Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className='js_header'>
        <div className="container">
            <div className="js_header__inner">
                <div className="header__left">
                    <div className="header__logo">
                        <img src={logo} alt="" />
                    </div>

                    <div className="header__links">
                        <NavLink to='/findjob'>Find Jobs</NavLink>
                        <NavLink to='/browsecompanies'>Browse Companies</NavLink>
                    </div>
                </div>

                <div className="header__right">
                    <Link to='/login' className='header__login_btn'>Login</Link>
                    <Link to='/register' className='header__register_btn'>Sign Up</Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar