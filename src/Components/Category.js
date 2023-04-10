import { Link } from 'react-router-dom';

function Category() {
    return (
        <div className="Home">
            <div className="flexboxleft wrapper">
                <img src={require('../Assets/leftbox.png')} />
                <div className='flexboxright'>
                    <h6><span>404</span><br></br> Page Not Found</h6>
                    <p>Publishing industries for previewing layouts & visual mockups used.</p>
                    <Link to="/"><button>Go Back</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Category;
