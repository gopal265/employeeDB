import React from 'react'
import Field from './Field'

const Employee = ({ employee }) => {
  return (
    <div className='bg-bgColor2 rounded-2xl mb-[15px]  p-4'>

      <div className=' text-[14px]  py-2 flex w-full'>
        <Field title="EMP ID" value={employee.id} color="text-white font-semibold" />
        <div className='w-[25px] h-[25px] rounded-full border-black border-[2px] flex justify-center items-center text-white text-[12px]'>{employee.id}</div>
      </div>

      <div className='text-[14px]  py-2 w-full'>
        <Field title="Name" value={employee.name} color="text-white font-semibold" />
      </div>

      <div className='text-[14px]  py-2 w-full'>
        <Field title="DOB" value={employee.dob} color="text-orange-500 opacity-50 font-semibold" />
      </div>

      <div className='text-[14px] py-2 w-full'>
        <Field title="Role" value={employee.role} color="text-green-500 opacity-50 font-semibold " />
      </div>

    </div>
  )
}

export default Employee
