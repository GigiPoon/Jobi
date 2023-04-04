import { useEffect, useState } from "react";
import jobsData from "../Data/JobsData";
import { getDatabase, ref, onValue, remove, push } from 'firebase/database'
import firebase from '../firebase';


function Jobs() {

    const [userInput, setUserInput] = useState('');
    const [userSubmit, setUserSubmit] = useState('');
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const database = getDatabase(firebase)
        const dbRef = ref(database)
        onValue(dbRef, (response) => {
            const newState = []
            const data = response.val()
            for (const key in data) {
                newState.push(data[key])
            } 
            setJobs(newState)
        })
    },[]) 

    const handleInputChange = (event) => {
        setUserInput(event.target.value)
    }

    console.log(jobs.filter(job=>job.toLowerCase().includes("fe")))

    const handleSubmit = (event) => {
        event.preventDefault();
        // saveItemToDatabase(jobsData)
        console.log(event, 'event')
        setUserInput('');
    }

    // const saveItemToDatabase = (item) => {
    //     const database = getDatabase(firebase)
    //     const dbRef = ref(database)
    //     const newObject = {
    //         title: item
    //         }
    //         console.log(newObject, 'newobject')
    //     push(dbRef, newObject)
    // }


    return (
        <div className="Home">
            <div className="wrapper">
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
                <ul>
                        {
                        jobs.filter((job) => job.toLowerCase().includes(userInput)).map((job) => {


                            return (
                                <li>
                                    <p>Title: {job}</p>
                                    {/* <p>Date: {job.date}</p> 
                                    <p>Required Skills: {job.requiredSkills}</p>
                                    <p>Description: {job.description}</p>
                                    <p>Salary: Max {job.salary.max} Min {job.salary.min}</p>  */}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Jobs;