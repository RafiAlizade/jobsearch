import {useEffect, useState } from 'react'
import axios from 'axios'
import './HelpedGrow.css'

function HelpedGrow() {
    const [brands, setBrands] = useState([])

    useEffect(() => {
        const getBrands = async () => {
            const getBrand = await axios.get('http://localhost:3000/brand')
            setBrands(getBrand.data)
        }

        getBrands()
    }, [])

  return (
    <section className="js__growup">
        <div className="container">
            <div className="js__growup__inner">
                <span className="growup__description">
                Companies we helped grow
                </span>

                <div className="growup__logos">
                    {brands.map((brand, key) => (
                        <div className="growup__logo" key={key}>
                            <img src={brand.img} alt={brand.name} title={brand.name} />
                        </div>  
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default HelpedGrow