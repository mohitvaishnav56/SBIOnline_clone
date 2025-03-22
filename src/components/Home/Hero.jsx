import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <div className="mt-10 p-6 md:p-10 h-[75vh] flex items-center justify-center">
      <div className="h-[95%] w-[95%] flex flex-col justify-center rounded-md items-center gap-5 bg-gradient-to-r from-[#8D6AC2] via-[#A34A9C] to-[#AA2870] text-center p-5">
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold">
          Banking Made Simple & Secure
        </h1>
        <h3 className="text-lg md:text-2xl text-[#E7E2E2]">
          Experience seamless online banking with security and ease.
        </h3>
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto justify-center">
          <Link className="group w-full md:w-auto">
            <button className="w-full md:w-auto px-4 py-2 md:py-3 text-white bg-[#00B5EF] flex justify-center items-center gap-2 rounded-md cursor-pointer">
              Open an Account <FaArrowRight />
            </button>
          </Link>

          <Link className="group w-full md:w-auto">
            <button className="w-full md:w-auto px-4 py-2 md:py-3 text-white bg-[#000000] flex justify-center items-center gap-2 rounded-md cursor-pointer">
              Explore Features
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
