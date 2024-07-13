import {useEffect, useState } from 'react'
import axios from 'axios'
import './LatestJobs.css'
import { Link } from 'react-router-dom'
import { ArrowRight } from "react-bootstrap-icons";


function LatestJobs() {
  const [jobList, setjobList] = useState([]);
  const [latestJob, setlatestJob] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const resp = await axios.get("http://localhost:3000/activeJobs");
            setjobList(resp.data);
        }

        getData();
    }, []);

    useEffect(() => {
        if(jobList.length > 0) {
      const shuffledData = jobList.sort(() => 0.3 - Math.random());
      setlatestJob(shuffledData.slice(0,8))
        }
    }, [jobList])
    
  return (
    <section className="js__latestjobs">
        <div className="container">
            <div className="js__latestjobs__inner">
                <div className="latestjobs__top">
                    <span className="latestjobs__toptext">
                        Latest <span>jobs open</span>
                    </span>
                    <Link to="/jobs">Show all jobs <ArrowRight /></Link>
                </div>

                <div className="latestjobs__bottom">
                        <div className="latestjobs__container">
                            {latestJob.map((job, index) => (
                                <Link to='/link' key={index}>
                                        <div className="latestjobs__box">
                                            <div className="latestjobs__img">
                                                <img src={job.companyLogo} alt="" />
                                            </div>

                                            <div className="latestjobs__box__texts">
                                                <div className="latestjobs__texts__top">
                                                    <span className="latestjobs__name">
                                                        {job.name}
                                                    </span>

                                                    <span className="latestjobs__company_loc">
                                                        {job.companyName} ‧ {job.locCity}, {job.locCountry}
                                                    </span>
                                                </div>

                                                <div className="latestjobs__shows">
                                                    <button className='latestjobs__time'>{job.time}</button>
                                                    <button className="latestjobs__hash1">
                                                        {job.hashOne}
                                                    </button>
                                                    {job.hashTwo && job.hashTwo.length > 0 ? <button className='latestjobs__has2'>{job.hashTwo}</button> : ''}
                                                </div>
                                            </div>
                                        </div>
                                </Link>
                            ))}
                        </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LatestJobs