import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateHomePageContent } from "../../actions/logoAction";

const AdminLogo = () => {
  const dispatch = useDispatch();
  const { logoUrl, heading, subheading } = useSelector((state) => state.logo);
  const [formData, setFormData] = useState({ logoUrl, heading, subheading });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateHomePageContent(formData));
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-semibold text-blue-800 mb-4 py-5">
        Edit Homepage Content
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <input
          type="text"
          placeholder="Logo URL"
          name="logoUrl"
          value={formData.logoUrl}
          onChange={handleChange}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Heading"
          name="heading"
          value={formData.heading}
          onChange={handleChange}
          required
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

export default AdminLogo;
