import React from 'react'

function 
Card3({icon, title, description, bg, header}) {
  return (
    <div className={`px-8 py-4 min-h-[150px] w-[350px] ${bg} rounded-md flex flex-col items-start justify-center gap-2`}>
      <div className='w-full flex items-center justify-between'>
        <span className='px-3 py-1 bg-white rounded-full'>
            <h4 className='text-xs text-blue-600'>{header}</h4>
        </span>
      <span className="flex items-centerjustify-center bg-white p-2 rounded-full">
        {icon}
      </span>
      </div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-md text-start text-[#575454]">{description}</p>
    </div>
  )
}

export default Card3