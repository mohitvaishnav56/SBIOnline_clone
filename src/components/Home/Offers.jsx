import React from "react";
import { Link } from "react-router-dom";
import Card3 from "./Card3";
import { LuTag } from "react-icons/lu";
import { MdPercent } from "react-icons/md";
import { IoGiftOutline } from "react-icons/io5";

const data = [
    {
        header: "Loans",
        icon: <LuTag size={20} color="#0070EF" />, 
        title: "Zero Processing Fee on Home Loans",
        description: "Apply for a new home loan and get zero processing fee for a limited time.",
        bg: "bg-[linear-gradient(291deg,_rgba(255,255,255,0.80)_-15.7%,_rgba(220,234,254,0.80)_49.87%)]",
    },
    {
        header: "Cards",
        icon: <MdPercent size={20} color="#0070EF" />, 
        title: "5% Cashback on Credit Card Purchases",
        description: "Get 5% cashback on all purchases made using your SBI credit card.",
        bg: "bg-[linear-gradient(291deg,_rgba(255,255,255,0.80)_-15.7%,_rgba(204,223,251,0.80)_49.87%)]",
    },
    {
        header: "Digital Banking",
        icon: <IoGiftOutline size={20} color="#0070EF" />, 
        title: "Free NEFT/RTGS Transactions",
        description: "Enjoy free NEFT and RTGS transactions through Online SBI.",
        bg: "bg-[linear-gradient(291deg,rgba(255,255,255,0.80)_-15.7%,rgba(220,150,100,0.80)_100%)]",
    },
    {
        header: "Deposits",
        icon: <MdPercent size={20} color="#0070EF" />, 
        title: "Special FD Rates for Senior Citizens",
        description: "Senior citizens can enjoy extra 0.5% interest rate on fixed deposits.",
        bg: "bg-[linear-gradient(291deg,_rgba(255,255,255,0.80)_-15.7%,_rgba(243,232,255,0.80)_49.87%)]",
    }
];

function Offers() {
  return (
    <div className="min-h-screen p-4 w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.80)_0%,rgba(249,250,251,0.80)_100%)] flex flex-col items-center">
      <span className="inline-flex items-center justify-center px-4 py-2 bg-white border border-gray-400 rounded-full">
        <h1 className="text-sm md:text-base font-semibold">Limited Time</h1>
      </span>
      <div className="w-full flex flex-col lg:flex-row items-center justify-between max-w-6xl p-4">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">Latest Offers & Promotions</h1>
          <h3 className="text-lg md:text-xl text-gray-600 mt-2">
            Discover exclusive deals and special offers designed to help you
            save more and make the most of your banking journey.
          </h3>
        </div>
        <div className="w-full lg:w-[30%] flex justify-center lg:justify-end mt-4 lg:mt-0">
          <Link to="/offers">
            <button className="px-4 py-2 bg-white border-2 text-black flex items-center gap-2 rounded-md cursor-pointer hover:bg-[#A34A9C] hover:text-white transition-all">
              Explore Offers
            </button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl p-5">
        {data.map((card, index) => (
          <Card3 key={index} icon={card.icon} title={card.title} description={card.description} bg={card.bg} header={card.header} />
        ))}
      </div>
    </div>
  );
}

export default Offers;
