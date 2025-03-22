import React from "react";
import { FaCheckCircle, FaStar } from "react-icons/fa";

const BenefitsAndTestimonial = () => {
  return (
    <div className="p-6 max-w-2xl md:block hidden mx-auto">
      {/* Benefits Section */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-2xl shadow-lg mb-6">
        <h2 className="text-xl font-bold mb-4">Benefits of SBI Online Banking</h2>
        <ul className="space-y-3">
          <li className="flex items-start space-x-2">
            <FaCheckCircle size={20} className="mt-1" />
            <div>
              <p className="font-semibold">24/7 Account Access</p>
              <p className="text-sm">Access your accounts anytime, anywhere through our secure online platform</p>
            </div>
          </li>
          <li className="flex items-start space-x-2">
            <FaCheckCircle size={20} className="mt-1" />
            <div>
              <p className="font-semibold">Quick Fund Transfers</p>
              <p className="text-sm">Instantly transfer funds between accounts or to other banks</p>
            </div>
          </li>
          <li className="flex items-start space-x-2">
            <FaCheckCircle size={20} className="mt-1" />
            <div>
              <p className="font-semibold">Bill Payments & Subscriptions</p>
              <p className="text-sm">Pay utility bills and manage subscriptions all in one place</p>
            </div>
          </li>
          <li className="flex items-start space-x-2">
            <FaCheckCircle size={20} className="mt-1" />
            <div>
              <p className="font-semibold">Personalized Financial Insights</p>
              <p className="text-sm">Get customized insights to help you manage your finances better</p>
            </div>
          </li>
        </ul>
      </div>
      
      {/* Testimonial Section */}
      <div className="bg-white p-6 rounded-2xl shadow-md text-center">
        <div className="flex justify-center text-yellow-500 mb-3">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} size={20} />
          ))}
        </div>
        <p className="text-gray-700 italic mb-4">
          "SBI's online banking has transformed how I manage my finances. The security features give me peace of mind."
        </p>
        <p className="font-bold">Rajesh Kumar</p>
        <p className="text-sm text-gray-500">SBI Customer since 2015</p>
      </div>
    </div>
  );
};

export default BenefitsAndTestimonial;
