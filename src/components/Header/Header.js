import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'


const Header = () => {
    return (
        <nav className='header'>
            <div>
            <img src={logo}></img>
            </div>
            <div className=''>
                <Link to='/shop'>Shop</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/inventory'>Inventory</Link>
                <Link to='/about'>About</Link>
                <Link to='/login'>Login</Link>
            </div>
        </nav>
    );
};

export default Header;