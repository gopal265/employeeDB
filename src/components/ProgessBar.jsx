import React from 'react'

const ProgessBar = ({ heading, progress }) => {
    return (
        <div>

            <div className='flex  pb-[8px]'>

                <div className='text-[12px] text-white text-left pr-[30px] w-[250px] '>
                    {heading}
                </div>

                <div className='text-customgreen2 w-[14px]'>
                    {progress}
                </div>

            </div>
            <div class="mb-5 h-[11px] rounded-full bg-transparent  w-[150px]">
                <div class="h-[11px] rounded-full bg-customgreen3 border-customgreen2 border" style={{ width: progress }}></div>
            </div>
        </div>
    )
}

export default ProgessBar
