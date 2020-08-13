import React from "react";
import ApplicationViews from "./ApplicationViews";
import "./SocialTiger.css"
import Banner from "../components/Banner"
import "./Banner.css"


// When the user opens the app they should see two things: 1) The Banner  2) the Login or Register Form
const SocialTiger = () => {
 
    return (
        <>
            <Banner />
            <ApplicationViews
            />
        </>
    );
};

export default SocialTiger;