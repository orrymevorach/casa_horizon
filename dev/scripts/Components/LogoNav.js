import React from 'react';
import Nav from './Nav';

const LogoNav = () => {
    return (
        <div className="logo-nav clearfix">
            <div className="logo-nav-top-left">
                <img src="../img/Logo.png" alt="Casa Horizon Logo" />
            </div>
            <div className="logo-nav-top-right">
                <Nav />
            </div>
        </div>
    )
}

export default LogoNav;