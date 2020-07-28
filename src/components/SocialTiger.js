import React from "react";
// import ApplicationViews from "./ApplicationViews";
import Login from "./auth/Login"
import Banner from "./Banner"

// When the user opens the app they should see two things: 1) The Banner  2) the Login or Register Form
const SocialTiger = () => {
    return (
        <>
            <Banner/>
            <Login />

        </>
    );
};

export default SocialTiger;