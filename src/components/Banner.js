import React from "react";
import BannerForLogin from "../components/BannerForLogin";
import BannerSignedIn from "../components/BannerSignedIn";

const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

const Banner = (props) => {

    if (isAuthenticated()) {

        return <BannerSignedIn />;
        
    } else {
        return <BannerForLogin />;
    }
};

export default Banner;