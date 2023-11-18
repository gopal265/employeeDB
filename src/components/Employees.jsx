import React, { useState, useSyncExternalStore } from 'react'
import helpicon from "../assets/images/help.png"
import moptro from "../assets/images/moptro.png"
import Icons from './Icons'
import { employees } from "../assets/data/employess"
import Employee from './Employee'
const Employees = ({ tab, setTab }) => {

    const [name, setName] = useState("");
    const [empData, setEmpData] = useState(employees);

    const handleSearch = () => {
        if (name.trim() === "") {
            setEmpData(employees);
            return
        }
        const formatted = new RegExp(name, 'i');
        const filterEmployees = employees.filter(emp => formatted.test(emp.name));
        console.log(filterEmployees, formatted)
        setEmpData(filterEmployees);
    }

    return (
        <div className='md:p-8  p-4 flex flex-col  w-full'>

            <div className=' w-full'>
                <img src={helpicon} className='float-right' />
            </div>

            <div className='flex  min-w-full flex-col justify-center items-center'>

                <div className='pb-[34px]'>
                    <img src={moptro} />
                </div>

                <div className='pb-[45px] relative'>
                    <input className='w-[298px] h-[55px] rounded-2xl bg-customgray3 text-white shadow-customShadow2 outline-none pl-[30px] font-semibold' placeholder='Search with name' value={name} onChange={(e) => setName(e.target.value)} />
                    <div className='absolute top-[18px]  right-[15px] text-white' onClick={handleSearch}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
                        </svg>

                    </div>
                </div>

                <div className='pb-[30px]'>
                    {

                        empData.map(employee => (
                            <div className={`${employee.id % 2 === 0 ? "pl-6" : "pr-6"} w-[300px]`}>
                                <Employee employee={employee} />
                            </div>
                        ))

                    }
                </div>



                <div className='mt-[59px] h-[63px]  grid grid-cols-2 w-full rounded-3xl bg-image3 fixed bottom-[5px] '>

                    <div className={`flex items-center justify-center h-[60px] rounded-3xl px-3 ${tab === "dashboard" ? "bg-bgColor2 text-customgreen2" : "text-customgreen3"}`} onClick={() => setTab("dashboard")}>
                        <Icons svg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                        </svg>
                        } />
                    </div>

                    <div className={`flex items-center justify-center h-[60px] rounded-3xl px-3 ${tab === "employees" ? "bg-bgColor2 text-customgreen2" : "text-customgreen3"}`} onClick={() => setTab("employees")}>
                        <Icons svg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                        </svg>} />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Employees
