import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header className="top-header">
        <div className="logo"><img className="fluid-img"  src="/i/logo.svg" alt="logo" /></div>
        <ul className="main-nav">
            <li><NavLink exact to="/" activeClassName="myActiveClass"  >Home</NavLink></li>
            <li><NavLink to="/users" activeClassName="myActiveClass"  >Users</NavLink></li>
            <li><NavLink to="/about" activeClassName="myActiveClass"  >About us</NavLink></li>
        </ul>
    </header>
)

export default Header;