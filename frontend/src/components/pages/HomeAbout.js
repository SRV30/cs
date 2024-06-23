import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAboutContent } from "../../actions/homeAboutAction";

const HomeAbout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAboutContent());
  }, [dispatch]);

  const {
    heading,
    subheading,
    description1,
    description2,
    imageUrl,
  } = useSelector((state) => state.aboutHome);

  return (
    <div id="about" className="main2 bg-blue-100 py-8 px-4">
      <main className="flex-grow container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h4 className="text-blue-800 text-lg md:text-2xl font-bold">
            {heading}
          </h4>
          <h3 className="text-black italic text-lg">{subheading}</h3>
          <p className="text-black mt-4">{description1}</p>
          <p className="text-black mt-6">{description2}</p>
          <a
            href="/about"
            className="inline-block px-4 py-2 bg-blue-800 text-white rounded-md mt-6"
          >
            Read more about me
          </a>
        </div>
        <div className="md:w-1/3">
          <img src={imageUrl} alt="about" className="w-full h-full" />
        </div>
      </main>
    </div>
  );
};

export default HomeAbout;
