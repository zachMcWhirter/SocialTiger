import React from "react";
import { Link } from "react-router-dom";

// Create links in your navigation bar

// I am not including a header in the NavBar because I want to be able to use the Banner on the Login screen without the navigation links
const NavBar = () => {
    return (
        <>
            <nav>
                <ul className="container">
                    <li>
                        <Link className="nav-link" to="/home">
                            Home
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;