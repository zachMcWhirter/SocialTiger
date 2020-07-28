import React from "react";
import Logout from "../components/auth/Logout"

const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

const Banner = (props) => {

    

    if (isAuthenticated()) {

        return (

            <>
                <header>
                    <button type="button"
                            onClick={Logout}>
                        Log Out
                    </button>
                    <h1>Social Tiger</h1>
                </header>
            </>
        );
    }
};

export default Banner;