import React from "react";
import Card2 from "./Card2";
import { CiMobile1 } from "react-icons/ci";
import { GoShieldCheck } from "react-icons/go";
import { IoWalletOutline } from "react-icons/io5";
import { GoCreditCard } from "react-icons/go";
import { VscGraph } from "react-icons/vsc";
import { CiCircleCheck } from "react-icons/ci";

function Feature() {
  const data = [
    {
      icon: <CiMobile1 size={50} color="#0070EF" />, 
      title: "Mobile Banking",
      description:
        "Access your accounts, make payments, and transfer funds – all from your smartphone or tablet.",
    },
    {
      icon: <GoShieldCheck size={50} color="#0070EF" />, 
      title: "Enhanced Security",
      description:
        "Multi-layered security with biometric authentication and real-time fraud detection to protect your accounts.",
    },
    {
      icon: <IoWalletOutline size={50} color="#0070EF" />, 
      title: "Digital Wallet",
      description:
        "Link your cards to popular digital wallets for seamless and secure contactless payments.",
    },
    {
      icon: <GoCreditCard size={50} color="#0070EF" />, 
      title: "Credit Cards",
      description:
        "Explore our range of credit cards with competitive rates, rewards, and exclusive benefits.",
    },
    {
      icon: <VscGraph size={50} color="#0070EF" />, 
      title: "Financial Insights",
      description:
        "Get detailed analytics on your spending habits and personalized recommendations.",
    },
    {
      icon: <CiCircleCheck size={50} color="#0070EF" />, 
      title: "Quick Loans",
      description:
        "Apply for pre-approved loans with minimal documentation and instant approval.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center  gap-4 py-10 px-4 md:px-10">
      <span className="flex items-center justify-center px-4 py-2 bg-white border border-gray-400 rounded-full">
        <h1 className="text-sm md:text-base font-semibold">Features</h1>
      </span>
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Banking that adapts to your lifestyle
      </h1>
      <h3 className="text-lg md:text-xl text-gray-600 text-center max-w-2xl">
        Experience the next generation of digital banking with features designed
        to make your financial journey seamless and secure.
      </h3>
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl mt-6">
        {data.map((card, index) => (
          <Card2
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Feature;
