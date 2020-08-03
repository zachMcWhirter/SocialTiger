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
                <div className="h1-container">
                    <button className="logOutButton"
                            type="button"
                            onClick={handleLogout}>
                        LogOut
                    </button>
                    <h1>SOCIAL TIGER</h1>
                </div>  
                <div>
                    <img 
                        className="logo" 
                        src="https://res.cloudinary.com/lordargyle22/image/upload/v1596292629/socialTiger/SocialTiger_bwtvfg.png" />
                </div>        
                
            </>
        );
    } else {
        return <Redirect to="/" />;
    }
};

export default BannerSignedIn;