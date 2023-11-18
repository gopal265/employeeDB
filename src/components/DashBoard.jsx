import React from 'react'
import helpicon from "../assets/images/help.png"
import moptro from "../assets/images/moptro.png"
import { productivity } from '../assets/data/productivity'
import ProgessBar from './ProgessBar'
import Icons from './Icons'
const DashBoard = ({ tab, setTab }) => {

    console.log(tab)
    return (
        <div className='md:p-8  p-4 flex flex-col  w-full'>

            <div className=' w-full'>
                <img src={helpicon} className='float-right' />
            </div>

            <div className='flex  w-full flex-col justify-center items-center'>

                <div className='pb-[41px]'>
                    <img src={moptro} />
                </div>

                <div className='w-[328px] max-w-full h-[465px] bg-bgColor1 shadow-customShadow2 rounded-3xl pb-4 '>

                    <div className='bg-customgray2 rounded-3xl w-full h-[45px] opacity-80 text-[18px]  text-white flex items-center justify-center'>Employee Productivity Dashboard</div>

                    <div className='py-[13px] pl-[5px]'>
                        {
                            productivity.map(prod => (
                                <div className='pb-[5px]'>
                                    <ProgessBar heading={prod.heading} progress={prod.progess} />
                                </div>
                            ))
                        }
                    </div>

                </div>

                <div className='mt-[59px] h-[63px]  grid grid-cols-2 w-full rounded-3xl bg-image3 fixed bottom-0 '>

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

export default DashBoard
