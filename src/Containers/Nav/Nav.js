// Imports
import React from 'react';
import './Nav.css';
import logo from '../../imgs/blackLogo.png';
// Link used to create multiple-page feeling SPA
import { Link } from 'react-router-dom';

// ES6 Functional Component 
const Nav = () => {

    // targets 'side-menu' element styling onClick
    function openSlideMenu() {
        document.getElementById('side-menu').style.width = '30rem';
        document.getElementById('side-links').style.opacity = '1';
    }

    // targets 'side-menu' element styling onClick
    function closeSlideMenu() {
        document.getElementById('side-menu').style.width = '0';
        document.getElementById('side-links').style.opacity = '0';
    }

    // Two version of the NAV rendered in JSX (Mobile and Desktop)
    return (
        <header>
            <nav className="navbar">
                <div className="side-nav-icons">
                    <span className="open-slide">
                        <a href="#" onClick={openSlideMenu}>
                            <i className="fas fa-bars"></i>
                        </a>
                    </span>
                    <img src={logo} alt="logo" />
                </div>
                <div id="side-menu">
                    <div id="side-links">
                        <ul>
                            <a href="#" className="btn-close" style={{ fontSize: '3.6rem' }} onClick={closeSlideMenu}>&times;</a>
                            <Link to='/'>
                                <li>HOME</li>
                            </Link>
                            <Link to='/products'>
                                <li>PRODUCTS</li>
                            </Link>
                            <Link to='/contact'>
                                <li>CONTACT</li>
                            </Link>
                        </ul>
                        <div className="bottom-links">
                            <label className="hidden" for="currency1">hidden</label>
                            <select className="currency" id="currency1">
                                <option value="usd">USD</option>
                                <option value="usd">GBP</option>
                                <option value="usd">EUR</option>
                                <option value="usd">CAD</option>
                                <option value="usd">AUD</option>
                            </select>
                            <a href="#" aria-label="profile"><i className="fas fa-user-circle"></i></a>
                            <a href="#" aria-label="search"><i className="fas fa-search"></i></a>
                            <a href="#" aria-label="shopping cart"><i className="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="all-links">
                        <div className="main-links">
                            <img src={logo} alt="logo" />
                            <ul>
                                <Link to='/'>
                                    <li>HOME</li>
                                </Link>
                                <Link to='/products'>
                                    <li>PRODUCTS</li>
                                </Link>
                                <Link to='/contact'>
                                    <li>CONTACT</li>
                                </Link>
                            </ul>
                        </div>
                        <div className="secondary-links">
                            <label className="hidden" for="currency2">hidden</label>
                            <select className="currency" id="currency2">
                                <option value="usd">USD</option>
                                <option value="usd">GBP</option>
                                <option value="usd">EUR</option>
                                <option value="usd">CAD</option>
                                <option value="usd">AUD</option>
                            </select>
                            <a href="#" aria-label="profile"><i className="fas fa-user-circle"></i></a>
                            <a href="#" aria-label="search"><i className="fas fa-search"></i></a>
                            <a href="#" aria-label="shopping cart"><i className="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

// Export Nav Component
export default Nav;