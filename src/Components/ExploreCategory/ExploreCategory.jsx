import {useEffect, useState } from 'react'
import axios from 'axios'
import './ExploreCategory.css'
import {ArrowRight} from 'react-bootstrap-icons'
import 'primeicons/primeicons.css';
import { Link } from 'react-router-dom';



function ExploreCategory() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategory = async () => {
            const category = await axios.get('http://localhost:3000/categories')
            setCategories(category.data)
        }

        getCategory()
    })
  return (
    <section className="jr__ecategories">
        <div className="container">
            <div className="jr__ecategories__inner">
                <div className="ecategories__top">
                        <span className="ecategories__span">Explore by <span>category</span></span>
                        <Link to='/categories'>Show all jobs <ArrowRight /> </Link>
                </div>

                <div className="ecategories__bottom">
                    {categories.map((category, index) => (
                        <Link to={`/categories/${category.name.toLowerCase()}`} key={index}>
                            <div className="ecategories__container">
                             <i className={`pi pi-${category.icon}`}></i>
                            <span className="ecategories__name">{category.name}</span>
                                <span className="ecategories__count">
                                    {category.avaible} jobs avaible <ArrowRight />
                                </span>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default ExploreCategory