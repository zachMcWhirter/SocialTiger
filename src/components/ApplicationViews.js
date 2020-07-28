import { Route, Redirect } from "react-router-dom";
import React from "react";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import FolderListPage from "../pages/FolderListPage"

const ApplicationViews = () => {

    return (
        
        <>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/folders" component={FolderListPage} />
            {/* <Route exact path="/" component={HomePage} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/" component={HomePage} /> */}

        </>
    )
}

export default ApplicationViews;