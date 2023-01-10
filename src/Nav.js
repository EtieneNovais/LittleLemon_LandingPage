import logo from './images/logo1.png';

function Nav(){
    return (
        <nav>
            <div className='logo-container'>
                <img src={logo} alt="Logo" className='logo'/>
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
        </nav>
    );
}

export default Nav;