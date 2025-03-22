import React from "react";
import { FaUser, FaCalendarAlt } from "react-icons/fa";

const RegisterForm = () => {
  return (
    <div className="md:min-h-[80vh] md:w-1/2 max-w-full flex items-center justify-center">
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold mb-2">Create Your Account</h2>
      <p className="text-gray-600 mb-4">Join millions of SBI customers</p>
      
      {/* Tabs */}
      <div className="flex border-b mb-4">
        <button className="flex-1 py-2 border-b-2 border-purple-500 text-purple-500 font-semibold">Personal Banking</button>
        <button className="flex-1 py-2 text-gray-500">Corporate Banking</button>
      </div>
      
      {/* Form Fields */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input type="text" placeholder="First Name" className="p-3 border rounded-lg w-full" />
        <input type="text" placeholder="Last Name" className="p-3 border rounded-lg w-full" />
      </div>
      
      <div className="mb-4 flex items-center border rounded-lg p-3">
        <FaUser className="text-gray-400 mr-2" />
        <input type="text" placeholder="Username" className="w-full outline-none" />
      </div>
      
      <div className="mb-4 flex items-center border rounded-lg p-3">
        <FaCalendarAlt className="text-gray-400 mr-2" />
        <input type="text" placeholder="dd/mm/yyyy" className="w-full outline-none" />
      </div>
      
      {/* Gender Selection */}
      <div className="mb-4">
        <label className="block text-gray-600 mb-2">Gender</label>
        <div className="flex space-x-4">
          <label><input type="radio" name="gender" value="male" className="mr-1" /> Male</label>
          <label><input type="radio" name="gender" value="female" className="mr-1" /> Female</label>
          <label><input type="radio" name="gender" value="other" className="mr-1" /> Other</label>
        </div>
      </div>
      
      {/* Submit Button */}
      <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold">Continue</button>
      
      <p className="text-center text-gray-600 mt-4">Already have an account? <a href="#" className="text-purple-500">Login</a></p>
    </div>
    </div>
  );
};

export default RegisterForm;
