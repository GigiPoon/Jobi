import HomeDemand from "./HomeDemand";
import Howsitwork from "./Howsitwork";
import Topcompany from "./Topcompany";
import Worldoftalents from "./Worldoftalents";
import QA from "./QA";
import Leadingstartup from "./Leadingstartup";
import Jobiguides from "./Jobiguides";

function Home() {


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
                            <form className="homeforum">
                                <div className="homeleft">
                                    <label htmlFor="" className="">Job Categories</label>
                                    <select>
                                        <option value="">Designer</option>
                                    </select>
                                </div>
                                <div className="homeright">
                                    <label htmlFor="" className="">
                                    Keywords or Title
                                    </label>
                                    <input
                                        type="search"
                                        id="search">
                                    </input>
                                </div>
                            <button type="submit">Search</button>
                            </form>
                            <p><span className="bold">Populer:</span>  Design, Art, Business, Video Editing</p>
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
        </div>
    );
}

export default Home;
