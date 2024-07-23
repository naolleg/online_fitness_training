import React from 'react'

function Advice() {
    return (
        <>
            <div className="flex flex-col md:flex-row bg-[#edede5] text-black py-16 items-center justify-around dark:bg-gray-800 dark:text-[#edede5]">
                <p className="ps-10 text-2xl md:mr-10">Enhance user experience with healthy nutrition and support resource and social elements</p>
                <button className=" p-1 px-2 bg-[#345671] mt-4 md:mt-0 me-10 duration-300 ease-in-out transform hover:scale-105  text-[#edede5] text-sm  py-1 px-2 mx-4 rounded-[5px] dark:text-white dark:bg-gray-900">Join us</button>
            </div>
        </>
    )
}

export default Advice