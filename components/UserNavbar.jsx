// UserNavbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../contextAPI/userContext';

const UserNavbar = () => {
  const {setIsLoggedIn} = useUser();

  const userNavbarList = ['dashboard', 'profile', 'orders', 'messages', 'support', 'favorites', 'bilings','settings']

  return (
    <div className='user-navbar'>
      <div className='user-nav-img'>
        <img src="https://thechildrengreenbook.net/assets/images/_logo.png" alt="Logo" />
      </div>
      <ul className='user-nav-links'>
        {userNavbarList.map((item) => {
          return(<>
          <li key={item}>
            <Link to={`/${item.replace(" ", '-')}`}>{item[0].toUpperCase() + item.slice(1)}</Link>
          </li>
          </>)
        })}
      </ul>
      <div className="sign-out-btn" onClick={() => {
        localStorage.removeItem("token");
        localStorage.removeItem("userData");
        setIsLoggedIn(false);
      }}><Link to='/login'>Sign Out</Link></div>
    </div>
  );
};

export default UserNavbar;
