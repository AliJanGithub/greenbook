import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../src/App.css';

function Navbar() {
    const location= useLocation();
    const token = localStorage.getItem("token");
    // console.log(token)
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <nav className='nav-container'>
            <div className='nav-img'>
                <img src="https://thechildrengreenbook.net/assets/images/_logo.png" alt="Logo" />
            </div>

            <div className="nav-list">
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about">ABOUT US</Link></li>
                    <li><Link to="/review">REVIEW</Link></li>
                    <li><Link to="/gallery">GALLERY</Link></li>
                </ul>
            </div>

            <div className="nav-ins">
                {!token && location.pathname !== '/signup' && location.pathname !== '/profile' && <button><Link to='/signup'>Sign Up</Link></button>}
                {!token && location.pathname !== '/login' && location.pathname !== '/profile' && <button><Link to='/login'>Login</Link></button>}
                {token && (
                    <>
                        <button onClick={() => {
                            localStorage.removeItem("token")
                            localStorage.removeItem("userData")
                        }
                        }><Link to='/login'>Sign Out</Link></button>
                        <button><Link to='/profile'>Profile</Link></button>
                    </>
                )}
            </div>

            <div className="nav-options">
                <div className="dropdown">
                    <button className="dropbtn" onClick={toggleDropdown}>Menu</button>
                    <div className={`dropdown-content ${dropdownVisible ? 'show' : ''}`}>
                        <Link to="/">HOME</Link>
                        <Link to="/about">ABOUT US</Link>
                        <Link to="/review">REVIEW</Link>
                        <Link to="/gallery">GALLERY</Link>
                        {location.pathname !== '/signup' && <Link to='/signup'>Sign Up</Link>}
                        {location.pathname !== '/login' && <Link to='/login'>Login</Link>}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
