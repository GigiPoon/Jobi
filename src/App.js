import { Link, Routes, Route } from "react-router-dom";

import Home from "./Components/Home"
import Job from "./Components/Job"
import Explore from "./Components/Explore";
import Category from "./Components/Category";
import Pages from "./Components/Pages";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/"><img src={require('./Assets/jobiLogo.png')} /></Link>
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
        <div className="shiftnavright">
          <button>Login/Sign up</button>
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
