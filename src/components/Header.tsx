import React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <div className="header">

            <div className="logo">
                <Link to="/">Cigatee Capital</Link>
            </div>

            <div className="nav">
                <Link to="/blogs">View Blogs</Link>
                <Link to="/blogs">Research</Link>
            </div>

            <div className="search-wrapper">
                <input type="text" placeholder="Search..." />
            </div>

        </div>
    )
}

export default Header;
