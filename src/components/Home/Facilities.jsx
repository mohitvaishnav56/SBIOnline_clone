import React from 'react'
import Card1 from './Card1'
import { CiMobile1 } from "react-icons/ci";
import { GoShieldCheck } from "react-icons/go";
import { GrUpdate } from "react-icons/gr";

function Facilities() {

    const data = [
        {
            icon: <GoShieldCheck size={50} color='#0070EF'/>,
            title: 'Bank-Grade Security',
            description: 'Protected by advanced encryption and multi-factor authentication.'
        },
        {
            icon : <CiMobile1 size={50} color='#0070EF'/>,
            title: 'Mobile Banking',
            description: 'Manage your finances anytime, anywhere with our intuitive mobile app.'
        },
        {
            icon: <GrUpdate size={50} color="#0070EF" />,
            title: "Real-Time Updates",
            description:
              "Instant notifications and live transaction tracking for complete control.",
          },
    ]

  return (
    <div className='p-5 flex items-center justify-center flex-wrap gap-8'>
        {data.map((card, index) => (
            <Card1 key={index} icon={card.icon} title={card.title} description={card.description}/>
        ) )}
    </div>
  )
}

export default Facilities