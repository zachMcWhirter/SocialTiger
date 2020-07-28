import React from "react";
import NavBar from "../components/nav/NavBar"
import FolderCard from "../components/folder/FolderCard";
import Authentication from "../components/auth/Authentication";
import Banner from "../components/Banner"

const HomePage = () => {
  return (
      <>
        <Banner/>
        <NavBar/>
        <FolderCard/>
      </>
  );
};

export default Authentication(HomePage);