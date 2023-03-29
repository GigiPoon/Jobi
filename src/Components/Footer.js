function Footer() {
    return (
        <div className="Footer">
            <div className="wrapper footer">
                <img src={require('../Assets/jobiLogo.png')} />
                <ul className='footerone'>
                    <li>
                        <h3>Products</h3>
                    </li>
                    <li>
                        <a href="#">Take the tour</a>
                    </li>
                    <li>
                        <a href="#">Live chat</a>
                    </li>
                    <li>
                        <a href="#">Self-service</a>
                    </li>
                    <li>
                        <a href="#">Mobile</a>
                    </li>
                    <li>
                        <a href="#">Collaboration</a>
                    </li>
                    <li>
                        <a href="#">Reviews</a>
                    </li>
                </ul>
                <ul className='footerone'>
                    <li>
                        <h3>Links</h3>
                    </li>
                    <li>
                        <a href="#">Take the tour</a>
                    </li>
                    <li>
                        <a href="#">Live chat</a>
                    </li>
                    <li>
                        <a href="#">Self-service</a>
                    </li>
                    <li>
                        <a href="#">Mobile</a>
                    </li>
                    <li>
                        <a href="#">Collaboration</a>
                    </li>
                    <li>
                        <a href="#">Reviews</a>
                    </li>
                </ul>
                <ul className='footerone'>
                    <li>
                        <h3>Legal</h3>
                    </li>
                    <li>
                        <a href="#">Take the tour</a>
                    </li>
                    <li>
                        <a href="#">Live chat</a>
                    </li>
                    <li>
                        <a href="#">Self-service</a>
                    </li>
                    <li>
                        <a href="#">Mobile</a>
                    </li>
                    <li>
                        <a href="#">Collaboration</a>
                    </li>
                    <li>
                        <a href="#">Reviews</a>
                    </li>
                </ul>
                <div className='rightfooter'>
                    <h3>Newsletter</h3>
                    <p>Join & get important new regularly</p>
                    <form>
                        <label for="search" className="sr-only">

                        </label>
                        <input
                            type="text"
                            placeholder="Enter your email"
                        />
                        <button>Send</button>
                    </form>
                    <p>We only send interesting and relevant emails.</p>
                </div>
            </div>
            <div className='copyright'>
                <p>Copyright @2022 jobi inc.</p>
            </div>
        </div>
    );
}

export default Footer;