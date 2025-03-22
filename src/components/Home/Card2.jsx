import React from "react";

function Card2({ icon, title, description }) {
  return (
    <div className="px-8 py-4 nin-h-[200px] w-[350px] bg-white rounded-md flex flex-col items-start justify-center gap-2">
      <span className="flex items-center justify-center p-3 bg-[#F0F6F8FC] rounded-full">
        {icon}
      </span>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-md text-start text-[#8D8D8D]">{description}</p>
    </div>
  );
}

export default Card2;
