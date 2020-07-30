import { Route } from "react-router-dom";
import React from "react";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import FolderListPage from "../pages/FolderListPage";
import CreateFolderPage from "../pages/CreateFolderPage";

const ApplicationViews = (props) => {

    return (

        <>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/home" component={HomePage} />    
            <Route exact path="/folders" component={FolderListPage} />
            <Route exact path="/folders/CreateFolder" component={CreateFolderPage} />
            
            {/* <Route exact path="/" component={EditFolderPage} /> */}
            {/* <Route exact path="/" component={ImageListPage} />
            <Route exact path="/" component={AddNewImagePage} />
            <Route exact path="/" component={EditImagePage} />
            <Route exact path="/" component={ViewImagePage} /
            <Route exact path="/" component={ViewImagePage} /> */}

            {/* <Route exact path="/home" render={props => {
                return <HomePage {...props} />
            }} /> */}
            {/* <Route exact path="/folders" render={props => {
                 return <FolderListPage {...props} />
                }} /> */}
            {/* <Route exact path="/folders/CreateFolder" 
                render={props => {
                    return <CreateFolderPage {...props} />
                }} /> */}

        </>
    );
};

export default ApplicationViews;