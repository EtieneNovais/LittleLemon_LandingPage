import logo2 from './images/logo2.png';

function Footer(){
    return (
        <footer>
            <div className='footer-left'>
                <img src={logo2} alt='logo'/>
            </div>
            <div className='footer-right'>
                <div className="nav">
                    <h2>Doormat Navigation</h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </div>
                <div className="contact">
                    <h2>Contacts</h2>
                    <ul>
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </div>
                <div className="media-links">
                    <h2>Social Media Links</h2>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;