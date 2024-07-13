import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './FeaturedJobs.css'
import { ArrowRight } from "react-bootstrap-icons";

function FeaturedJobs() {
  const [database, setDatabase] = useState([]);
  const [shuffledData, setshuffledData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get("http://localhost:3000/activeJobs");
      setDatabase(resp.data);
    };

    getData();
  }, []);

  useEffect(() => {
    if (database.length > 0) {
      const featuredList = database.filter((data) => data.featuredJob)
      const shuffledData = featuredList.sort(() => 0.3 - Math.random());
      setshuffledData(shuffledData.slice(0,8));
    }
  }, [database]);

  return (
    <section className="js__feajobs">
      <div className="container">
        <div className="js__feajobs__inner">
          <div className="feajobs__top">
            <span className="feajobs__toptext">
              Featured <span>jobs</span>
            </span>

            <Link to="/jobs">Show all jobs <ArrowRight /></Link>
          </div>

          <div className="feajobs__bottom">
            <div className="feajobs__container">
              {shuffledData.map((data, index) => (
                <Link to="/fixed" key={index}>
                  <div className="feajobs__box">
                    <div className="feajobs__box__top">
                        <div className="feajobs__logo">
                            <img src={data.companyLogo} alt="" />
                        </div>

                        <button className="feajobs__time">{data.time}</button>
                    </div>

                    <div className="feajobs__box__center">
                        <div className="feajobs__name__company">
                            <span className="feajobs__name">
                                {data.name}
                            </span>

                            <span className="feajobs__company">
                                {data.companyName} ‧ {data.locCity}, {data.locCountry}
                            </span>
                        </div>

                        <span className="feajobs__description">
                            {data.jobDescription}
                        </span>
                    </div>

                    <div className="feajobs__box__bottom">
                        <button className="feajobs__box__hash1">{data.hashOne}</button>
                        {data.hashTwo && data.hashTwo.length > 0 ? <button className="feajobs__box__hash1">{data.hashTwo}</button> : ''  }
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedJobs;
