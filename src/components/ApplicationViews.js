import { Route, Redirect } from "react-router-dom";
import React from "react";
import LoginPage from "../pages/LoginPage"


const ApplicationViews = () => {

    return (
        
        <>
            <Route exact path="/" component={LoginPage} />
            
        </>
    )
}

export default ApplicationViews;