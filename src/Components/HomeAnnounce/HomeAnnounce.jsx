import React from 'react'
import './HomeAnnounce.css'
import { Link } from 'react-router-dom'
import annimg from './../../assets/images/Dashboardcompany.png'

function HomeAnnounce() {
  return (
    <section className="js__announce">
        <div className="container">
            <div className="js__announce__inner">
                <div className="announce__left">
                    <h2 className="announce__h2">
                        Start posting jobs today
                    </h2>

                    <span className="announce__description">
                        Start posting jobs for only $10
                    </span>

                    <Link to='/signup'>Sign Up For  Free</Link>
                </div>

                <div className="announce__right">
                    <div className="announce__img">
                        <img src={annimg} alt="section-img" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeAnnounce