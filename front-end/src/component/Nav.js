import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    const auth = localStorage.getItem('user');
    const nevigate = useNavigate()
    const logout = () => {
        localStorage.clear();
        nevigate('/signup');
    }
    return (
        <div>
            <img 
            alt='logo'
            className='logo'
            src = "https://i.pinimg.com/1200x/02/d1/ec/02d1ec7bfaf9e3273449bc2429e617fd.jpg" />

            {auth ? <ul className='Nav-ul'>
                <li><Link to="/"> Home</Link></li>
                <li><Link to="/Contact"> Contact Us</Link></li>
                <li><Link to="/About"> About Us</Link></li>
                <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
            </ul>
                :
                <ul className='Nav-ul nav-right'>
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            }
        </div>
    )
}

export default Nav;