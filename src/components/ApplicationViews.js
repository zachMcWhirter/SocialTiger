import { Route } from "react-router-dom";
import React from "react";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import FolderListPage from "../pages/FolderListPage";
import CreateFolderPage from "../pages/CreateFolderPage";
import EditFolderPage from "../pages/EditFolderPage";
import ImageListPage from "../pages/ImageListPage";
import ImageViewPage from "../pages/ImageViewPage";
import CreateImagePage from "../pages/CreateImagePage";
import EditImagePage from "../pages/EditImagePage";

const ApplicationViews = (props) => {

    return (

        <>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/home" component={HomePage} />    
            <Route exact path="/folders" component={FolderListPage} />
            <Route exact path="/folders/CreateFolder" component={CreateFolderPage} />
            <Route exact path="/folders/:folderId(\d+)/edit" component={EditFolderPage} />
            <Route exact path="/folders/:folderId(\d+)" component={ImageListPage} />
            <Route exact path="/images/:imageId(\d+)" component={ImageViewPage} />
            <Route exact path="/images/CreateImage" component={CreateImagePage} />
            <Route exact path="/" component={EditImagePage} />
            {/* <Route exact path="/" component={ViewImagePage} /> */}
        </>
    );
};

export default ApplicationViews;