import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./NavBar.css"

// Create links in your navigation bar

// I am not including a header in the NavBar because I want to be able to use the Banner on the Login screen without the navigation links
const NavBar = (props) => {

    const [isAuthenticated, setIsAuthenticated] = useState(true);

    const handleLogout = (e) => {
        e.preventDefault();
        sessionStorage.removeItem("credentials");
        sessionStorage.clear();
        setIsAuthenticated(false);
    }    

     if (isAuthenticated) {

        return (
            <>
                <div className="nav-container">
                    <nav>
                        <button className="logOutButton"
                                    type="button"
                                    onClick={handleLogout}>
                                LogOut
                        </button>

                        <ul className="container">
                            <li>
                                <div 
                                id="navHome"
                                className="link-container">
                                    <Link 
                                    className="nav-link"  to="/home">
                                        Home
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div 
                                id="navFolders"
                                className="link-container">
                                    <Link className="nav-link" to="/folders/">
                                        Folders
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="link-container">
                                    <Link className="nav-link" to="/folders/:folderId/images/CreateImage">
                                        Create Image
                                    </Link>
                                </div>    
                            </li>
                        </ul>
                    </nav>
                </div>
            </>
        );
    } else {
            return <Redirect to="/" />;
    }
};

export default NavBar;