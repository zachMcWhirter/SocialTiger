import React from "react";
import BannerForLogin from "../components/BannerForLogin";
import BannerSignedIn from "../components/BannerSignedIn";
import "./Banner.css"

const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

const Banner = (props) => {

    if (isAuthenticated()) {

        return( 
            <>
                <div className="banner">
                    <BannerSignedIn />
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="banner">
                    <BannerForLogin />
                </div>
            </>
        )
    }
};

export default Banner;