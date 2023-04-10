import { useEffect, useState } from "react";
import jobsData from "../Data/JobsData";
import { getDatabase, ref, onValue, remove, push } from 'firebase/database'
import firebase from '../firebase';
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

import { Link, Routes, Route } from "react-router-dom";


function Jobs() {

    const navigate = useNavigate();

    const [page, setPage] = useState(0)
    const [userInput, setUserInput] = useState('');
    const [userSubmit, setUserSubmit] = useState('');
    const [jobs, setJobs] = useState([]);
    const [jobTitle, setJobTitle] = useState('');

    const handleBack = () => {
        if (page === 0) {
            navigate('/job')
        }
        else {
            setPage(page - 1)
        }
    };

    useEffect(() => {
        const database = getDatabase(firebase)
        const dbRef = ref(database)
        onValue(dbRef, (response) => {
            const newState = []
            const data = response.val()
            for (let key in data) {
                newState.push({ key: key, name: data[key] });
            }
            setJobs(newState)
            console.log(jobs, "jobs")
        })
    },[]) 
    

    const handleInputChange = (event) => {
        setUserInput(event.target.value)
    }
    

    const handleSubmit = (event) => {
        event.preventDefault();
        setUserInput('');
    }

    const handleNext = (event) => {
        event.preventDefault();
        setJobTitle(event.target.value)
        console.log(event, "eventbutton")
        saveItemToDatabase(event.target.value)
        setPage(page + 1)
    };

    const saveItemToDatabase = (item) => {
        const database = getDatabase(firebase)
        const dbRef = ref(database)
        console.log(item, "item")
        const newObject = {

            }
            console.log(newObject, 'newobject')
        push(dbRef, newObject)
    }


    if (page === 0) return (
        <div className="Home">
            <div className="jobsBackgroundcolor">
                <div className="jobdetails wrapper">
                    <h2>Job Listing</h2>
                    <p>We delivered blazing fast & striking solution</p>
                    <form
                        className="homeforum"
                        onSubmit={(event) => {
                            handleSubmit(event);
                        }}>
                    <div className="homeleft">
                        <label htmlFor="" className="">Job Categories</label>
                        <select name="jobChange" id="jobChange" onChange={(e) => { handleInputChange(e) }}>
                            {jobsData.map((title, index) => {
                                return (
                                    <option
                                        key={index}
                                        value={title.title}>{title.title}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="homeright">
                        <label for="search" className="search">
                            Keywords or Title
                        </label>
                        <input
                            name="search"
                            type="text"
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit">Search</button>
                </form>
            </div>
            </div>
                <div className="bottomjoblist wrapper">
                    <div className="filter">
                        <h3>Filter By</h3>
                        <form>
                            <label for="search" className="search">
                            </label>
                            <input
                                name="search"
                                type="text"
                                onChange={handleInputChange}
                            />

                            {/* <label htmlFor="" className="">Categories</label>
                            <select name="jobChange" id="jobChange" onChange={(e) => { handleInputChange(e) }}>
                                {jobsData.map((title, index) => {
                                    return (
                                        <option
                                            key={index}
                                            value={title.title}>{title.title}
                                        </option>
                                    )
                                })}
                            </select> */}
                            {/* <input type="checkbox" id="fulltime" name="fulltime" value="fulltime"/>
                            <label for="fulltime">Fulltime</label>
                            <input type="checkbox" id="fulltime" name="fulltime" value="fulltime" />
                            <label for="fulltime">Fulltime</label>
                            <input type="checkbox" id="fulltime" name="fulltime" value="fulltime" />
                            <label for="fulltime">Fulltime</label>
                            <input type="checkbox" id="fulltime" name="fulltime" value="fulltime" />
                            <label for="fulltime">Fulltime</label> */}
                        </form>
                    </div>
                    <ul className="jobBoxes">
                            {
                            jobsData.filter((job) => job.title.toLowerCase().includes(userInput)).map((job, index) => {
                                return (
                                    <li key={index}>
                                        <div className="logoimgbox"> 
                                            <img src={require('../Assets/logobox.png')} />
                                            <img src={require('../Assets/bookmark.png')} />
                                        </div>
                                        <p>{job.contractType}</p>
                                        <p>{job.title}</p>
                                        <p>{job.salary.min}, {job.salary.max}</p>
                                        <div className="locationbutton">
                                            <p>{job.location.city}, {job.location.country}</p>
                                            <button
                                                type="button"
                                                onClick={handleNext}
                                                value={job.title}
                                                >Apply</button> 
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

            <Footer />
        </div>
    );
    if (page === 1) return (
        <div className="Home">
            <div className="jobdetails wrapper">
            <h2>Job Details</h2>
            <p>Here will be your company job details & requirements</p>
            <div className="jobDetailBottom">
                <div className="jobDetailLeft">
                    <p>18 Jul 2022 by <span>Adobe</span></p>
                    <h3>{jobTitle}</h3>
                    <h3>Overview</h3>
                    <p>When team members told us they needed more flexibility around where and how they worked, we acted, creating two options to accommodate two different styles of work. One non-negotiable principle along the way? We had to retain our deep culture of collaboration, both among ourselves and with our clients. Introducing Work From Near and Work From Anywhere at WillowTree.
                    Learn more here. Please indicate which location(s) you're interested.</p>
                    <h3>Job Description</h3>
                    <p>As a Product Designer at WillowTree, you’ll give form to ideas by being the voice and owner of product decisions. You’ll drive the design direction, and then make it happen!</p>
                    <p>
                    We understand our responsibility to create a diverse, equitable, and inclusive place within the tech industry, while pushing to make our industry more representative. </p>
                </div>
                <div className="jobDetailRight">
                    <h4>Title</h4>
                    <button>Visit Website</button>
                    <div className="listright">
                        <div className="jobDescription">
                        <p><span>Salary</span><br></br>50k-60k/year</p>
                        <p><span>Location</span><br></br>Spain, Baecelona </p>
                        <p><span>Date</span><br></br>12 jun, 2022</p>
                        </div>
                        <div className="jobDescription">
                            <p><span>Expertise</span><br></br>Intermediate</p>
                            <p><span>Job Type</span><br></br>Fulltime</p>
                            
                            <p><span>Experience</span><br></br>2 Years</p>
                    </div>
                    </div>
                    <div className="listrighttwo">
                        <p>Design</p>
                        <p>Product Design</p>
                        <p>Brands</p>
                        <p>Application</p>
                        <p>UX/UI</p>
                    </div>
                    <button
                        type="button"
                        onClick={handleBack}>Apply Now
                    </button>
                </div>
                </div>
            </div>  
            <Footer />         
        </div>
    );
}

export default Jobs;