import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <div className="navbar-wrapper">
            <div className="nav-link">
                <Link to={"/"}>
                    <h2>Home</h2>
                </Link>
                <Link to={"/aboutUs"}>
                    <h2>About us</h2>
                </Link>
            </div>
        </div>
    );
}

export default NavBar;
