import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createService } from "../../actions/serviceActions";

const AdminService = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [alt, setAlt] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(createService({ title, image, alt, description }));

      setTitle("");
      setImage("");
      setAlt("");
      setDescription("");

      showMessage("Service added successfully", "success");
    } catch (error) {
      showMessage("Failed to add service. Please try again.", "error");
    }
  };

  const showMessage = (msg, type) => {
    setMessage(msg);
    setMessageType(type);

    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 3000);
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-semibold text-blue-800 mb-4 py-5">
        Add New Service
      </h2>
      {message && (
        <div
          className={`py-2 px-4 mb-4 rounded-md ${
            messageType === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700"
        >
          Image URL
        </label>
        <input
          type="text"
          id="image"
          placeholder="Enter image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        <label
          htmlFor="alt"
          className="block text-sm font-medium text-gray-700"
        >
          Alt Text
        </label>
        <input
          type="text"
          id="alt"
          placeholder="Enter alt text"
          value={alt}
          onChange={(e) => setAlt(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          placeholder="Enter description"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500"
        >
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AdminService;
