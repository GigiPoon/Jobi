

function HomeDemand() {
    return (
        <div className="HomeDemand">
            <div className='wrapper'>
                <div className='flex containerdemand'>
                    <h2>Most Demanding Categories.</h2>
                    <a href="https://gigipoon.tech">All Categories</a>
                </div>
                <ul className='demandArray'>
                    <li className='flexdemand'>
                        <img src={require('../Assets/development.png')} />
                        <h4>Design & Development.</h4>
                        <p>2340 vacancy</p>
                    </li>
                    <li className='flexdemand'>
                        <img src={require('../Assets/marketing.png')} />
                        <h4>Customer Marketing & Sales.</h4>
                        <p>1560 vacancy</p>
                    </li>
                    <li className='flexdemand'>
                        <img src={require('../Assets/bag.png')} />
                        <h4>Business & Marketing.</h4>
                        <p>2210 vacancy</p>
                    </li>
                    <li className='flexdemand'>
                        <img src={require('../Assets/phone.png')} />
                        <h4>Business Development.</h4>
                        <p>980 vacancy</p>
                    </li>
                    <li className='flexdemand'>
                        <img src={require('../Assets/coding.png')} />
                        <h4>Programing & Code.</h4>
                        <p>2340 vacancy</p>
                    </li>
                    <li className='flexdemand'>
                        <img src={require('../Assets/editing.png')} />
                        <h4>Video Edition & 3D work</h4>
                        <p>2340 vacancy</p>
                    </li>
                    <li className='flexdemand'>
                        <img src={require('../Assets/art.png')} />
                        <h4>Art & Animation.</h4>
                        <p>2340 vacancy</p>
                    </li>
                    <li>
                        <h4>13k+</h4>
                        <p>Job already posted</p>
                        <img src={require('../Assets/lines.png')} />
                        <img src={require('../Assets/arrowWhite.png')} />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HomeDemand;