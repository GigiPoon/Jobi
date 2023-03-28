function Howsitwork() {
    return (
        <div className="Howsitwork wrapper">
            <h2>How it’s work?</h2>
            <ul className='howsitwork'>
                <li>
                    <img src={require('../Assets/account.png')} />
                    <h5>Create Account</h5>
                    <p>It’s very easy to open an account and start your journey.</p>
                </li>
                <li>
                    <img src={require('../Assets/profile.png')} />
                    <h5>Complete your profile</h5>
                    <p>Complete your profile with all the info to get attention of client.</p>
                </li>
                <li>
                    <img src={require('../Assets/apply.png')} />
                    <h5>Apply job or hire</h5>
                    <p>Apply & get your preferable jobs with all the requirements and get it.</p>
                </li>
            </ul>
        </div>
    );
}

export default Howsitwork;