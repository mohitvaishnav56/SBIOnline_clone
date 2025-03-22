import React from "react";
import { FaShieldAlt, FaLock, FaExclamationTriangle, FaSignOutAlt } from "react-icons/fa";

const RightPanel = () => {
  return (
    <div className="p-6 max-w-2xl md:block hidden mx-auto">
      {/* Security Info Card */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-2xl shadow-lg">
        <div className="flex items-center space-x-3 mb-4">
          <FaShieldAlt size={28} />
          <h2 className="text-xl font-bold">Bank-Grade Security</h2>
        </div>
        <p className="mb-4">
          Your security is our priority. SBI employs multiple layers of
          protection to ensure your information stays private and transactions
          remain secure.
        </p>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <FaLock size={20} />
            <span>Protected by advanced encryption and multi-factor authentication</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaExclamationTriangle size={20} />
            <span>24/7 fraud monitoring and real-time alerts for suspicious activities</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaShieldAlt size={20} />
            <span>Secure login with additional verification for high-risk transactions</span>
          </li>
        </ul>
      </div>

      {/* Security Tips */}
      <div className="bg-white mt-6 p-6 rounded-2xl shadow-md">
        <div className="flex items-center space-x-3 mb-4 text-purple-500">
          <FaLock size={24} />
          <h3 className="text-lg font-semibold">Security Tips</h3>
        </div>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Never share your password, OTP, or PIN with anyone</li>
          <li>Watch out for phishing emails or fake websites</li>
          <li>Always log out after completing your banking activities</li>
        </ul>
      </div>
    </div>
  );
};

export default RightPanel;
