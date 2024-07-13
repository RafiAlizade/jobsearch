import React from 'react'
import axios from 'axios'
import './Footer.css'
import { Link } from 'react-router-dom'
import Logo from './../../assets/images/logo_white.svg'
import { Facebook, Instagram, Dribbble, Linkedin, Twitter } from "react-bootstrap-icons";


function Footer() {
  return (
    <footer className="js__footer">
        <div className="container">
            <div className="js__footer__inner">
                <div className="js__footer__top">
                <div className="footer__main">
                    <div className="footer__logo">
                        <img src={Logo} alt="logo_white" />
                    </div>

                    <span>
                    Great platform for the job seeker that passionate about startups. Find your dream job easier.
                    </span>
                </div>

                <div className="footer__aboutlink">
                    <span>About</span>
                    <ul className="footer__aboutlink__ul">
                        <Link to='/companies'>Companies</Link>
                        <Link to='/pricing'>Pricing</Link>
                        <Link to='/terms'>Terms</Link>
                        <Link to='/advice'>Advice</Link>
                        <Link to='/privacy'>Privacy Policy</Link>
                    </ul>
                </div>

                <div className="footer__resources">
                    <span>Resources</span>
                    <ul className="footer__resources__ul">
                        <Link to='/docs'>Help Docs</Link>
                        <Link to='/guide'>Guide</Link>
                        <Link to='/updates'>Updates</Link>
                        <Link to='/contact'>Contact Me</Link>
                    </ul>
                </div>

                <div className="footer__submain">
                    <span>
                        Get job notification
                    </span>

                    <span>
                    The latest job news, articles, sent to your inbox weekly.
                    </span>

                    <div className="footer__submain__buttons">
                        <input type="text" placeholder='Email Address' />
                        <button>Subscribe</button>
                    </div>
                </div>
                </div>

                <div className="js__footer__hr">

                </div>

                <div className="js__footer__bottom">
                    <span>
                        2021 @ JobHuntly. All rights reserved.
                    </span>

                    <div className="footer__links">
                        <Link to='facebook.com'><Facebook /></Link>
                        <Link to='instagram.com'><Instagram /></Link>
                        <Link to='dribbble.com'><Dribbble /></Link>
                        <Link to='linkedin.com'><Linkedin /></Link>
                        <Link to='twitter.com'><Twitter /></Link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer