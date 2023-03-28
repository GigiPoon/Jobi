function Leadingstartup() {
    return (
        <div className="Leadingstartup">
            <div className='wrapper'>
                <div className='flexleading containerdemand'>
                    <h2>Trusted by leading startups.</h2>
                    <div className='arrowplacement'>
                        <img src={require('../Assets/pre.png')} />
                        <img src={require('../Assets/next.png')} />
                    </div>
                </div>
                <div className='flexcard'>
                    <div className="card">
                        <img src={require('../Assets/monday.png')} />
                        <p>“Seattle opera simplifies Performance planning with deski eSignature.”</p>
                        <p>Rashed kabir, Lead Designer</p>
                        <hr />
                        <div className='starflex'>
                            <p>4.5 Excellent</p>
                            <img src={require('../Assets/stars.png')} />
                        </div>
                    </div>
                    <div className="card">
                        <img src={require('../Assets/whiteshipbob.png')} />
                        <p>“How DocuSign CLM helps Celonis scale its global business.”</p>
                        <p>Mark Joge, Marketing Chief</p>
                        <hr />
                        <div className='starflex'>
                            <p>4.8 Awesome</p>
                            <img src={require('../Assets/fivestar.png')} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Leadingstartup;