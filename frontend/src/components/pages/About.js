import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAbout } from "../../actions/aboutActions";
import { IoIosCall, IoIosPhotos } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import GridLoader from "../layout/GridLoader";
import MetaData from "../layout/MetaData";

const About = () => {
  const dispatch = useDispatch();
  const aboutFetch = useSelector((state) => state.about);
  const { loading, error, about } = aboutFetch;

  useEffect(() => {
    dispatch(fetchAbout());
  }, [dispatch]);

  const [imageLoading, setImageLoading] = useState(true);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  if (loading) {
    return <GridLoader />;
  }

  if (error || !about) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <>
      <MetaData title="About | City Smile Dental Clinic" />
      <div className="bg-blue-100 min-h-screen">
        <div className="container my-5 py-8">
          <div className="flex items-center justify-center flex-col">
            <h3 className="text-4xl font-bold mb-4 text-blue-600 py-4">
              {about.name}
            </h3>
            {imageLoading && <GridLoader />}{" "}
            <img
              src={about.profilePicture}
              alt="Profile"
              className={`rounded-full w-52 h-52 mb-4 hover:opacity-80 transition-opacity duration-300 ease-in-out ${
                imageLoading ? "hidden" : "block"
              }`}
              style={{ maxWidth: "80%", maxHeight: "80%" }}
              onLoad={handleImageLoad} // Handle image load event
            />
            <h4 className="text-xl font-semibold text-blue-800">
              {about.qualifications}
            </h4>
            <div className="mb-4">
              <p>{about.experience1}</p>
              <p>{about.experience2}</p>
              <p>{about.experience3}</p>
              <p>{about.experience4}</p>
              <p>{about.experience5}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="flex items-center mb-4">
                <IoIosCall className="mr-2 text-blue-600" />
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`tel:${about.phone}`}
                  className="text-blue-600 hover:text-blue-900 transition-colors duration-300 ease-in-out"
                >
                  {about.phone}
                </a>
              </div>
              <div className="flex items-center mb-4">
                <FaWhatsapp className="mr-2 text-green-500" />
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://wa.me/91${about.whatsapp}`}
                  className="text-green-500 hover:text-green-700 transition-colors duration-300 ease-in-out"
                >
                  {about.whatsapp}
                </a>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <p className="mr-2 text-blue-700">Certificate of Registration:</p>
              <a
                href={about.registrationCertificate}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400"
              >
                View in full
              </a>
            </div>
            <div className="flex justify-center">
              <img
                id="registration"
                src={about.registrationCertificate}
                alt="Certificate of Registration"
                className="w-64 h-auto hover:opacity-80 transition-opacity duration-300 ease-in-out transform hover:scale-150"
              />
            </div>
            <div className="flex justify-center bg-white p-6 rounded-lg shadow-md mb-8 my-20">
              <IoIosPhotos className="mr-2 text-blue-600" />
              <a
                href="/photo"
                className="text-blue-600 hover:text-blue-900 transition-colors duration-300 ease-in-out"
              >
                Photo Gallery
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
