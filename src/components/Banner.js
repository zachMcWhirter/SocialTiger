import React from "react";

const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

const Banner = (props) => {


        if ( isAuthenticated() ) {
    
    return (
        <>
                <header>
                    <h1>Social Tiger - logout</h1>
                </header>
        </>
    )
    } else {

    

    return (

        <>
                <header>
                    <h1>Social Tiger no logout </h1>
                </header>
            
        </>
    );
    }
};

export default Banner;