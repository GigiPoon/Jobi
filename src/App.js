import { Link, Routes, Route } from "react-router-dom";

import Home from "./Components/Home"
import Job from "./Components/Job"
import Explore from "./Components/Explore";
import Category from "./Components/Category";
import Pages from "./Components/Pages";

function App() {
  
  return (
    <div className="App">
      <nav className="header">
        <div className="logo">
          <Link to="/"><img src={require('./Assets/jobiLogo.png')} /></Link>
        </div>
        <div className="navigation">
          <input type="checkbox" className="togglemenu"/>
          <div className="hamburger"></div>
          <ul className="navBar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="job">Job</Link>
            </li>
            <li>
              <Link to="explore">Explore</Link>
            </li>
            <li>
              <Link to="category">Category</Link>
            </li>
            <li>
              <Link to="pages">Pages</Link>
            </li>
          </ul>
        </div>
        <div className="shiftnavright">
          <button>Login</button>
          <button>Post a Job</button>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="job" element={<Job />} />
        <Route path="explore" element={<Explore />} />
        <Route path="category" element={<Category />} />
        <Route path="pages" element={<Pages />} />
      </Routes>
    </div>
  );
}

export default App;
