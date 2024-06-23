import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomePageContent } from "../../actions/logoAction";
import Loader from "../layout/Loader";

const Logo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomePageContent());
  }, [dispatch]);

  const logoList = useSelector((state) => state.logo);
  const { logoUrl, heading, loading, error } = logoList;

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="main1">
          <main className="flex-grow container mx-auto flex items-center justify-center py-9 ">
            <div className="flex flex-col md:flex-row items-center bg-blue-800 my-6">
              <img
                src={logoUrl}
                alt="home_alt"
                className="w-full sm:w-1/4 px-4 mx-auto"
              />
              <div className="text-center md:text-left px-8 py-12">
                <h4 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white"></h4>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mt-4">
                  {heading}
                </h2>
                <a
                  href="#viewservice"
                  className="inline-block px-4 py-2 bg-white text-blue-800 rounded-md mt-4"
                >
                  View Services
                </a>
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default Logo;
