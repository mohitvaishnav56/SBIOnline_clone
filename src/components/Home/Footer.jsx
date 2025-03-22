import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(291deg,_rgba(255,255,255,0.80)_-15.7%,_rgba(243,232,255,0.80)_49.87%)] border-t border-gray-300 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
          {/* Left Column */}
          <div>
            <img
              src={logo}
              alt="SBI Logo"
              className="w-20 mb-4"
            />
            <p className="text-sm">
              State Bank of India provides a wide range of banking products and services to fulfill all your financial needs.
            </p>
            <div className="flex space-x-4 mt-4 text-lg">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="cursor-pointer hover:text-blue-500" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="cursor-pointer hover:text-blue-400" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="cursor-pointer hover:text-pink-500" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="cursor-pointer hover:text-blue-600" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/online-banking" className="hover:underline">Online Banking</Link></li>
              <li><Link to="/loans-cards" className="hover:underline">Loans & Cards</Link></li>
              <li><Link to="/investments" className="hover:underline">Investments</Link></li>
              <li><Link to="/nri-services" className="hover:underline">NRI Services</Link></li>
            </ul>
          </div>

          {/* Customer Services */}
          <div>
            <h3 className="font-semibold mb-3">Customer Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link to="/locate-branch" className="hover:underline">Locate Branch/ATM</Link></li>
              <li><Link to="/faqs" className="hover:underline">FAQs</Link></li>
              <li><Link to="/grievance-redressal" className="hover:underline">Grievance Redressal</Link></li>
              <li><Link to="/holiday-list" className="hover:underline">Holiday List</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-3">Contact Information</h3>
            <p className="text-sm">
              State Bank Bhavan, Madame Cama Road, Mumbai - 400021, India
            </p>
            <p className="mt-2 text-sm">📞 1800 1234 5678</p>
            <p className="mt-2 text-sm">✉️ customercare@sbi.co.in</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
              <Link to="/contact-support">Contact Support</Link>
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-6 pt-4 text-center text-sm text-gray-600">
          <p>© 2025 State Bank of India. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:underline">Cookie Policy</Link>
            <Link to="/sitemap" className="hover:underline">Sitemap</Link>
          </div>
          <p className="mt-2 text-xs">
            This website is for demonstration purposes only. It is not affiliated with the actual State Bank of India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
