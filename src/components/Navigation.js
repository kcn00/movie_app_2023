import React from "react";
import {NavLink} from 'react-router-dom';
import './Navigation.css'

function Navigation() {
    return (
        <div className="nav">
            <NavLink exact to="/" replace>Home</NavLink>
            <NavLink exact to="/about" replace>About</NavLink>
        </div>
    );
}

export default Navigation;