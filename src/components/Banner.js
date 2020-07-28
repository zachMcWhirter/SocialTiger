import React from "react";

const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

const Banner = (props) => {

    

    if (isAuthenticated()) {

        return (

            <>
                <header>
                    <button type="button"
                            >
                        Log Out
                    </button>
                    <h1>Social Tiger</h1>
                </header>
            </>
        );
    }
};

export default Banner;