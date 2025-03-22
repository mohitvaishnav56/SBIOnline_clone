import React from 'react'
import { GoShieldCheck } from "react-icons/go";
import { CiMobile1 } from "react-icons/ci";
import { GrUpdate } from "react-icons/gr";


function Card1({icon, title, description}) {
  return (
    <div className='p-4 min-h-[250px] w-[300px] bg-white rounded-md flex flex-col items-center justify-center gap-2'>
        {icon}
        <h1 className='text-2xl font-bold'>{title}</h1>
        <p className='text-md text-center text-[#8D8D8D]'>{description}</p>
    </div>
  )
}

export default Card1