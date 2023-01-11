import logo from './images/logo1.png';
import {Link} from 'react-router-dom';

function Nav(){
    return (
        <nav>
            <div className='logo-container'>
                <img src={logo} alt="Logo" className='logo'/>
            </div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li>About</li>
                <li>Menu</li>
                <li><Link to='/booking'>Reservations</Link></li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
        </nav>
    );
}

export default Nav;