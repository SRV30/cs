import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Dashboard</h2>
      <div className="text-center">
        <p>Welcome to the Dashboard!</p>
        <div className="mt-4">
          <div className="mb-2">
            <Link
              to="/admin/users"
              className="block text-blue-600 hover:underline"
            >
              View All Users
            </Link>
          </div>
          <div className="mb-2">
            <Link
              to="/admin/contact"
              className="block text-blue-600 hover:underline"
            >
              View Get in Touch
            </Link>
          </div>
          <div className="mb-2">
            <Link
              to="/admin/photo"
              className="block text-blue-600 hover:underline"
            >
              Upload Clinic Photo
            </Link>
          </div>
          <div className="mb-2">
            <Link
              to="/admin/about"
              className="block text-blue-600 hover:underline"
            >
              Update About Section
            </Link>
          </div>
          <div className="mb-2">
            <Link
              to="/admin/services"
              className="block text-blue-600 hover:underline"
            >
              Create Services
            </Link>
          </div>
          <div className="mb-2">
            <Link
              to="/admin/logo"
              className="block text-blue-600 hover:underline"
            >
              Update Home Logo Section
            </Link>
          </div>
          <div className="mb-2">
            <Link
              to="/admin/home/about"
              className="block text-blue-600 hover:underline"
            >
              Update Home About Section
            </Link>
          </div>
          <div className="mb-2">
            <Link
              to="/admin/home/contact"
              className="block text-blue-600 hover:underline"
            >
              Update Home Contact Section
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
