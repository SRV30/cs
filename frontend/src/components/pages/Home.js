import React, { useState, useEffect } from "react";
import GetInTouch from "./getintouch";
import ViewService from "./ViewService";
import Logo from "./Logo";
import HomeAbout from "./HomeAbout";
import HomeContact from "./HomeContact";
import Loader from "../layout/Loader";
import MetaData from "../layout/MetaData"

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
    <MetaData title="Home | City Smile Dental Clinic" />
      <div id="home" className="min-h-screen flex flex-col">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Logo />
          <HomeAbout />
          <ViewService />
          <HomeContact />
          <GetInTouch />
        </>
      )}
    </div>
    </>
  );
};

export default HomePage;
