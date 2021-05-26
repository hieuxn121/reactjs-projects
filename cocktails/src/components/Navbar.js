import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="menu">
            <div className = "menu-content">
            <h2>The Cocktail DB</h2>
            <ul className = "menu-list">
                <li><NavLink className="menu-item" to="/">Home</NavLink></li>
                <li><NavLink className="menu-item" to="/about">About</NavLink></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar
