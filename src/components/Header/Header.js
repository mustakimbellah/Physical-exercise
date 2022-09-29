import React from 'react';
import './Header.css';
import logo from '../../images/logo.jpg'



const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <h2>Physical Exercise</h2>


        </nav>
    );
};

export default Header;