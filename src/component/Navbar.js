import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar=()=>{
    return(
        <div className='nav'>
            <Link to='/home' className='x'>HOME</Link>
            <Link to='/student' className='x'>STUDENT</Link>
            <Link to='/contact' className='x'>CONTACT</Link>
        </div>
    );
}
export default Navbar;