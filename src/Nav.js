import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {

  const naviStyle = {
  color:'white'
}

  return (
    <div>
        <nav>
            <h3>logo</h3>
            <ul className="nav-links">
              <Link style={naviStyle} to='/about'>
                <li>About</li>
              </Link>
              <Link style={naviStyle} to='/shop'>
                <li>Shop</li>
              </Link>
            </ul>
        </nav>
    </div>
  );
}

export default Nav;