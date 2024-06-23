import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAboutContent } from "../../actions/homeAboutAction";
import { toast } from "react-toastify";

const AdminHomeAbout = () => {
  const dispatch = useDispatch();
  const { heading, subheading, description1, description2, imageUrl } =
    useSelector((state) => state.aboutHome);

  const [formData, setFormData] = useState({
    heading,
    subheading,
    description1,
    description2,
    imageUrl,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(updateAboutContent(formData));
    toast.success("About content updated successfully!", {
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-semibold text-blue-800 mb-4 py-5">
        Edit About Content
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <input
          type="text"
          placeholder="Heading"
          name="heading"
          value={formData.heading}
          onChange={handleChange}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Subheading"
          name="subheading"
          value={formData.subheading}
          onChange={handleChange}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        <textarea
          placeholder="Description 1"
          rows="3"
          name="description1"
          value={formData.description1}
          onChange={handleChange}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        ></textarea>
        <textarea
          placeholder="Description 2"
          rows="3"
          name="description2"
          value={formData.description2}
          onChange={handleChange}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        ></textarea>
        <input
          type="text"
          placeholder="Image URL"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500"
        >
          Update Content
        </button>
      </form>
    </div>
  );
};

export default AdminHomeAbout;
