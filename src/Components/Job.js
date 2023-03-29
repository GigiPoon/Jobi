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

    const handleSubmit = (event) => {
        event.preventDefault();
        saveItemToDatabase(userInput)
        setUserInput('');
    }

    const saveItemToDatabase = (item) => {
        const database = getDatabase(firebase)
        const dbRef = ref(database)
        const newObject = {
            title: item
            }
        push(dbRef, newObject)
    }


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
                <div>
                    {
                        jobs.map((job)=> {
                            return (
                                <div>
                                    {job.title}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Jobs;