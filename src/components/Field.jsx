import React from 'react'

const Field = ({ title, value, color }) => {
  return (
    <div className='grid grid-cols-12 w-full'>

      <div className='col-span-3 text-white opacity-50'>
        {title}
      </div>

      <div className='col-span-1t text-white'>
        :
      </div>

      <div className={`col-span-8 ${color} `}>
        {value}
      </div>

    </div>
  )
}

export default Field
