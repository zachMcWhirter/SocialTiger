import React from "react";
import NavBar from "../components/nav/NavBar"
import FolderCard from "../components/folder/FolderCard";
import Authentication from "../components/auth/Authentication";
import BannerForLogin from "../components/BannerForLogin"

const HomePage = () => {
  return (
      <>
        <BannerForLogin/>
        <NavBar/>
        <FolderCard/>
      </>
  );
};

export default Authentication(HomePage);