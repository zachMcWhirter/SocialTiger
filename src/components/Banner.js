import React from "react";
// import BannerForLogin from "../components/BannerForLogin";
import BannerSignedIn from "../components/BannerSignedIn";
import "./Banner.css"

// const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

const Banner = (props) => {

    // if (isAuthenticated()) {

        return( 
            <>
                <div className="bannerSignedIn">
                    <BannerSignedIn />
                </div>
            </>
        )
    // } else {
    //     return (
    //         <>
    //             <div className="bannerForLogin">
    //                 <BannerForLogin />
    //             </div>
    //         </>
    //     )
    // }
};

export default Banner;