

function Jobiguides() {
    return (
        <div className="Jobiguides">

            <div className='wrapper'>
                <div className='flexjobi containerdemand'>
                    <h2>Jobi Guides</h2>
                    <a href="https://gigipoon.tech">Explore More</a>
                </div>
                <ul className='flexjobicards'>
                    <li>
                        <img src={require('../Assets/rectangle.png')} />
                        <p><span>Featured -</span> 18 Jul 2018</p>
                        <p>Print, publishing qui visual ux quis layout mockups.</p>
                        <p>Continue Reading</p>
                    </li>
                    <li>
                        <img src={require('../Assets/rectangle.png')} />
                        <p>16 Jul 2018</p>
                        <p>Designer’s Checklist for Every UX/UI Project.</p>
                        <p>Continue Reading</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Jobiguides;
