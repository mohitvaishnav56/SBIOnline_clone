import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock, FaArrowRight } from "react-icons/fa";

function LoginForm() {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <div className="md:min-h-[80vh] md:w-1/2 max-w-full flex items-center justify-center">
    <div className="max-w-md bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-black">Welcome Back</h2>
      <p className="text-gray-600">Login to access your SBI account</p>

      <div className="flex border-b mt-4">
        <button
          className={`px-4 py-2 text-lg font-medium ${
            activeTab === "personal"
              ? "text-purple-600 border-b-2 border-purple-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("personal")}
        >
          Personal Banking
        </button>
        <button
          className={`px-4 py-2 text-lg font-medium ${
            activeTab === "corporate"
              ? "text-purple-600 border-b-2 border-purple-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("corporate")}
        >
          Corporate Banking
        </button>
      </div>

      <div className="mt-6">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Username / Customer ID"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <FaUser className="absolute right-3 top-4 text-gray-400" />
        </div>

        <div className="relative mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <FaLock className="absolute right-3 top-4 text-gray-400" />
        </div>

        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center text-gray-600">
            <input type="checkbox" className="mr-2" /> Remember me
          </label>
          <Link
            to="/forgot-password"
            className="text-purple-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <button className="w-full py-3 text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-md flex items-center justify-center gap-2 text-lg">
          Login{" "}
          <FaArrowRight className="opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </button>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-purple-600 hover:underline">
            Register Now
          </Link>
        </p>
      </div>
    </div>

    </div>
  );
}

export default LoginForm;
