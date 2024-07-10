import {useEffect, useState } from 'react'
import './Hero.css'
import axios from 'axios'
import blueLine from './../../assets/images/line_blue.svg'
import { Search, GeoAlt } from 'react-bootstrap-icons'

function Hero() {
    const [popularLinks, setpopularLinks] = useState([])
    const [countriesName, setcountriesName] = useState([])
    const [selectedCountry, setselectedCountry] = useState(null)

    useEffect(() => {
        const getLinks = async () => {
            const links = await axios.get('http://localhost:3000/popularlinks')
            setpopularLinks(links.data)
        }

        const getCountries = async () => {
            const countries = await axios.get('http://localhost:3000/cities')
            setcountriesName(countries.data)
        }

        getLinks()
        getCountries()
    }, [])


    const setCountry = (e) => {
        setselectedCountry(e.target.value)
    }

    return (
        <section className="js__hero">
            <div className="container">
                <div className="js_hero__inner">
                    <h2 className="hero__h2">
                        Discover more <br /> than <span className="hero__marked">5000+ <br /> Jobs</span>
                    </h2>

                    <img src={blueLine} alt="" />

                    <span className="hero__description">Great platform for the job seeker that searching for <br /> new career heights and passionate about startups.</span>

                    <div className="hero__search_container">
                            <div className="hero__search__keyw">
                                <Search />
                                <input type="text" id="" placeholder='Job title or keyword' />
                            </div>

                            <div className="hero__search__loc">
                                <GeoAlt />
                                <select name='locations' className='hero__search_selects' onChange={setCountry}>
                                    {countriesName.map((countries, index) => (
                                        <option value={countries.country} key={index}>{countries.country}, {countries.city}</option>
                                    ))}
                                </select>
                            </div>

                            <button type='submit' className='hero__search_btn'>Search my job</button>
                    </div>

                    <span className="hero__popular">
                    Popular: {popularLinks.map((link, index) => (
                            <span key={index}>{link.name}</span>
                        ))}
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Hero