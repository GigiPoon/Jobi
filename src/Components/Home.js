import HomeDemand from "./HomeDemand";
import Howsitwork from "./Howsitwork";
import Topcompany from "./Topcompany";
import Worldoftalents from "./Worldoftalents";
import QA from "./QA";
import Leadingstartup from "./Leadingstartup";
import Jobiguides from "./Jobiguides";
import jobsData from "../Data/JobsData";
import Footer from "./Footer";
import { useEffect, useState } from "react";

function Home() {

    const [job, jobChange] = useState("");
    const [customInput, setCustomInput] = useState("");

    const handleChange = (event) => {
        jobChange(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(customInput)
        setCustomInput("");
    };

    return (
        <div className="Home">
                <div className="backgroundimg">
                    <div className="wrapper">
                        <h1>
                            <span>Find & Hire</span><br></br>
                            <span>Experts for any Job</span> 
                        </h1>
                        <div className="homestlye">
                            <p>Jobs & Job search. Find jobs in global. Executive jobs & work.</p>
                            <form 
                                className="homeforum"
                                onSubmit={(event) => {handleSubmit(event);}}>
                                <div className="homeleft">
                                <label htmlFor="" className="">Job Categories</label>
                                    <select name="jobChange" id="jobChange" onChange={handleChange}>
                                        {jobsData.map((title, index) => {
                                        return (
                                            <option
                                            key={index}
                                            value={title.title}>{title.title}</option>
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
                                        value={customInput}
                                    />
                                </div>
                            <button type="submit">Search</button>
                            </form>
                            <p><span className="bold">Populer:</span> Design, Art, Business, Video Editing</p>
                        </div>
                    </div>
                </div>
                    <ul className="logonav wrapper">
                        <li>
                            <img src={require('../Assets/google.png')} />
                        </li>
                        <li>
                            <img src={require('../Assets/shipbob.png')} />
                        </li>
                        <li>
                            <img src={require('../Assets/dribble.png')} />
                        </li>
                        <li>
                            <img src={require('../Assets/vine.png')} />
                        </li>
                        <li>
                            <img src={require('../Assets/airbnb.png')} />
                        </li>
                    </ul>
            <HomeDemand />
            <Howsitwork />
            <Worldoftalents />
            <Topcompany />
            <Leadingstartup />
            <QA />
            <Jobiguides />
            <Footer />
        </div>
    );
}

export default Home;
