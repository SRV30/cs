import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateHomeContact } from "../../actions/homeContactActions";
import { toast } from "react-toastify";

const AdminHomeContact = () => {
  const dispatch = useDispatch();
  const { contactInfo, success, error } = useSelector(
    (state) => state.homeContact
  );

  const [formData, setFormData] = useState({
    phone: "",
    whatsappLink: "",
    hours1: "",
    hours2: "",
    hours3: "",
    hours4: "",
    hours5: "",
    hours6: "",
    hours7: "",
    address: "",
  });

  useEffect(() => {
    if (contactInfo) {
      setFormData({
        phone: contactInfo.phone,
        whatsappLink: contactInfo.whatsappLink,
        hours1: contactInfo.hours1,
        hours2: contactInfo.hours2,
        hours3: contactInfo.hours3,
        hours4: contactInfo.hours4,
        hours5: contactInfo.hours5,
        hours6: contactInfo.hours6,
        hours7: contactInfo.hours7,
        address: contactInfo.address,
      });
    }
  }, [contactInfo]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(updateHomeContact(formData));
    toast.success("Contact information updated successfully!", {
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    if (success) {
      toast.success("Contact information updated successfully!", {
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (error) {
      toast.error("Failed to update contact information. Please try again.", {
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-semibold text-blue-800 mb-4 py-5">
        Edit Contact Information
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <label>
          Phone Number:
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </label>
        <label>
          Whatsapp Number:
          <input
            type="text"
            placeholder="Whatsapp"
            name="whatsappLink"
            value={formData.whatsappLink}
            onChange={handleChange}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </label>
        <label>
          Monday: (9:30 AM - 8.00 PM) - write in this format
          <input
            type="text"
            placeholder="Monday Hours"
            name="hours1"
            value={formData.hours1}
            onChange={handleChange}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </label>
        <label>
          Tuesday: (9:30 AM - 8.00 PM) - write in this format
          <input
            type="text"
            placeholder="Tuesday Hours"
            name="hours2"
            value={formData.hours2}
            onChange={handleChange}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </label>
        <label>
          Wednesday: (9:30 AM - 8.00 PM) - write in this format
          <input
            type="text"
            placeholder="Wednesday Hours"
            name="hours3"
            value={formData.hours3}
            onChange={handleChange}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </label>
        <label>
          Thursday: (9:30 AM - 8.00 PM) - write in this format
          <input
            type="text"
            placeholder="Thursday Hours"
            name="hours4"
            value={formData.hours4}
            onChange={handleChange}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </label>
        <label>
          Friday: (9:30 AM - 8.00 PM) - write in this format
          <input
            type="text"
            placeholder="Friday Hours"
            name="hours5"
            value={formData.hours5}
            onChange={handleChange}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </label>
        <label>
          Saturday: (9:30 AM - 8.00 PM) - write in this format
          <input
            type="text"
            placeholder="Saturday Hours"
            name="hours6"
            value={formData.hours6}
            onChange={handleChange}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </label>
        <label>
          Sunday: (9:30 AM - 8.00 PM) - write in this format
          <input
            type="text"
            placeholder="Sunday Hours"
            name="hours7"
            value={formData.hours7}
            onChange={handleChange}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </label>
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

export default AdminHomeContact;
