import React from 'react'
import Categories from './Categories'

function ExplorChategories() {
    return (
        <>
            <div className="bg-[#EDEDE5] text-black pb-6 dark:bg-gray-800 dark:text-[#EDEDE5]">
                <div className="px-6 py-6 sm:px-10 sm:py-12 md:px-16 md:py-12">
                    <p className="text-6xl sm:text-6xl md:text-8xl font-bold text-gray-300 dark:text-gray-600">Categories</p>
                    <p className="relative -top-4 sm:-top-6 md:-top-8 text-lg sm:text-xl md:text-2xl">Explore Categories</p>
                </div>
                <div className='ps-6 py-3 sm:ps-8  md:ps-10'>
                    <Categories />
                </div>
                <div className='flex justify-end pe-10 text-gray-500 hover:text-[#15222d] dark:hover:text-gray-500'>
                    <p className='cursor-pointer'>see more</p>
                </div>
            </div>
        </>
    )
}

export default ExplorChategories