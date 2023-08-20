import React from 'react';
import { Link } from 'react-router-dom';

const Nav=()=>{
    return(
        <div>
            <ul  className='Nav-ul'>
                <li><Link to = "/"> Home</Link></li>
                <li><Link to = "/Contact"> Contact Us</Link></li>
                <li><Link to = "/logout"> Logout</Link></li>
                <li><Link to = "/About"> About Us</Link></li>
                <li><Link to = "/Signup"> Sign-up</Link></li>
                
            </ul>
        </div>
    )
}

export default Nav;