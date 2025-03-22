import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaArrowRight,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import { CiLock } from "react-icons/ci";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    services: false,
    payments: false,
    accounts: false,
    loans: false,
    more: false,
  });
  const [isvisible, setIsVisible] = useState(false);

  const handleMouseEnter = (menu) => {
    setDropdowns({ ...dropdowns, [menu]: true });
  };

  const handleMouseLeave = (menu) => {
    setDropdowns({ ...dropdowns, [menu]: false });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsVisible(!isvisible);
  };

  return (
    <div className="w-full bg-[#ffffff9b] top-0 fixed z-2 backdrop-blur-md flex items-center justify-between">
      <div className="flex items-center">
        <img src={logo} alt="" className="w-[80px]" />
      </div>

      <div
        id="links"
        relative
        className=" md:w-[80%] w-[40%] mr-4 flex items-center justify-between text-[15px]"
      >
        <div className="w-[60%] border-r-2 py-1 hidden md:block px-1">
          <ul className="flex items-center justify-evenly space-x-6">
            <li>
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>

            {[
              {
                name: "services",
                label: "Services",
                links: [
                  "Personal Internet Banking",
                  "Corporate Internet Banking",
                  "Mobile Banking",
                  "yono LITE",
                  "yono BUSINESS",
                  "FAQ",
                ],
              },
              {
                name: "payments",
                label: "Payments",
                links: [
                  "SBI Payments",
                  "Online Tax / Payment / Receipt",
                  "SB Collect",
                  "SBI Unipay",
                  "mCash",
                ],
              },
              {
                name: "accounts",
                label: "Accounts",
                links: [
                  "Apply for SB/Current Account",
                  "Savings Bank Account",
                  "Current Account",
                  "Banking Forms",
                ],
              },
              {
                name: "loans",
                label: "Loans",
                links: [
                  "Loan Against Mutual Fund",
                  "E - Mandate",
                  "Home Loan",
                  "Gold Loan",
                  "Vehicle Loan",
                ],
              },
              {
                name: "more",
                label: "More",
                links: ["Donations", "Corporate Website", "Videos"],
              },
            ].map(({ name, label, links }) => (
              <li
                key={name}
                className="relative cursor-pointer"
                onMouseEnter={() => handleMouseEnter(name)}
                onMouseLeave={() => handleMouseLeave(name)}
              >
                <span className="flex items-center gap-1 hover:text-blue-600">
                  {label} <FaChevronDown size={12} />
                </span>

                <ul
                  className={`absolute bg-white text-black rounded-md shadow-lg w-56  transition-all duration-200 ease-in-out ${
                    dropdowns[name] ? "block" : "hidden"
                  }`}
                >
                  {links.map((link, index) => (
                    <li key={index} className="p-2 hover:bg-gray-200">
                      <Link to="#" className="block">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:px-8 md:w-[30%] p-4 flex  ">
          <ul className="w-full flex items-center justify-between gap-2 text-white ">
            <Link to={ "/register"} className="group md:block hidden">
              <button className="md:px-3 md:py-1 px-1 py-1 text-black bg-[#E7E2E2] flex md:justify-evenly items-center gap-1 rounded-md cursor-pointer">
                <FaUser /> Register
              </button>
            </Link>
            <Link to={"/login"} className="group">
              <button className="md:px-3 md:py-1 px-3 py-1 text-White bg-[#A34A9C] flex justify-evenly items-center gap-1 rounded-md  cursor-pointer ">
                <CiLock /> Login
                <FaArrowRight className="opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </button>
            </Link>
          </ul>
        </div>

        <div className="w-[14%] text-[15px] flex justify-center hidden md:block px-5 border-l-2 py-1">
          <Link className="text-blue-600">हिंदी</Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      <div
        id="tray"
        className={`w-full bg-white flex md:hidden ${
          isvisible ? "block" : "hidden"
        }  justify-center absolute top-[100%] p-4`}
      >
        <div className="w-full py-1 block ">
          <ul className="flex flex-col items-start justify-star space-x-6">
            <li className=" w-full border-b-1">
              <Link to="/" className="hover:text-blue-600 ">
                Home
              </Link>
            </li>

            <li className=" w-full border-b-1">
              <Link to="/register" className="hover:text-blue-600 ">
                Register
              </Link>
            </li>

            {[
              {
                name: "services",
                label: "Services",
                links: [
                  "Personal Internet Banking",
                  "Corporate Internet Banking",
                  "Mobile Banking",
                  "yono LITE",
                  "yono BUSINESS",
                  "FAQ",
                ],
              },
              {
                name: "payments",
                label: "Payments",
                links: [
                  "SBI Payments",
                  "Online Tax / Payment / Receipt",
                  "SB Collect",
                  "SBI Unipay",
                  "mCash",
                ],
              },
              {
                name: "accounts",
                label: "Accounts",
                links: [
                  "Apply for SB/Current Account",
                  "Savings Bank Account",
                  "Current Account",
                  "Banking Forms",
                ],
              },
              {
                name: "loans",
                label: "Loans",
                links: [
                  "Loan Against Mutual Fund",
                  "E - Mandate",
                  "Home Loan",
                  "Gold Loan",
                  "Vehicle Loan",
                ],
              },
              {
                name: "more",
                label: "More",
                links: ["Donations", "Corporate Website", "Videos"],
              },
            ].map(({ name, label, links }) => (
              <li
                key={name}
                className="relative cursor-pointer border-b-1 w-full"
                onMouseEnter={() => handleMouseEnter(name)}
                onMouseLeave={() => handleMouseLeave(name)}
              >
                <span className="flex items-center gap-1 hover:text-blue-600">
                  {label} <FaChevronDown size={12} />
                </span>

                <ul
                  className={`absolute bg-white text-black rounded-md shadow-lg w-56  transition-all duration-200 ease-in-out ${
                    dropdowns[name] ? "block" : "hidden"
                  }`}
                >
                  {links.map((link, index) => (
                    <li key={index} className="p-2 hover:bg-gray-200">
                      <Link to="#" className="block">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
