import React from 'react';
import "./Header.css"
import HeaderLogo from "../../images/Logo.svg"

const Header = () => {
    return (
        <nav className='header'>
            <img src={HeaderLogo} alt="" />
            <div>
                <a href="shops">Shops</a>
                <a href="/orders">Orders</a>
                <a href="inventory">inventory</a>
                <a href="about">About</a>
            </div>
        </nav>
    );
};

export default Header;