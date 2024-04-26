import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {


    return (
        <div>
            <header className="header">
                <span className="nav__logo">
                    Navigation Bar
                </span>
                <ul className='navMenu' >
                    <li className="nav">
                        <Link to="/">Tasks</Link>
                    </li>
                    <li className="nav">
                        <Link to="/deleted">Deleted tasks</Link>
                    </li>

                </ul>
            </header>
        </div>
    )
}

export default NavBar;  