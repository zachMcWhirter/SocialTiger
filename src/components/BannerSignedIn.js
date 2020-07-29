import React, { useState }from "react";
import { Redirect } from "react-router-dom";

const BannerSignedIn = (props) => {
    
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
                <header>
                    <button type="button"
                            onClick={handleLogout}>
                        Log Out
                    </button>
                    <h1>Social Tiger</h1>
                </header>
            </>
        );
    } else {
        return <Redirect to="/" />;
    }
};

export default BannerSignedIn;