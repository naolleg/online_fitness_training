import React from 'react'
import Trainers from './Trainers'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";


function TopTrainers() {
    return (
        <>
            <div className="bg-[#345671] text-black pb-6 dark:bg-gray-800 ">
                <div className="px-6 py-6 sm:px-10 sm:py-12 md:px-16 md:py-12 dark:text-[#EDEDE5]">
                    <p className="text-6xl sm:text-6xl md:text-8xl font-bold text-gray-500 dark:text-gray-600">Trainer</p>
                    <p className="relative -top-4 sm:-top-6 md:-top-8 text-lg sm:text-xl md:text-2xl text-white">Our trainers</p>
                </div>
                <Trainers />
            </div>
        </>
    )
}

export default TopTrainers