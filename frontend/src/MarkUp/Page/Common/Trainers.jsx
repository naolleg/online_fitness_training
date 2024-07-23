import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Top1 from '../../../assets/bodyBulider.jpeg';
import Top2 from '../../../assets/cardiostrengh.jpeg';
import Top3 from '../../../assets/yoga.jpeg';
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import './trainer.css';

const trainers = [
    { name: 'MS Lisa', specialty: 'Yoga Instructor', img: Top3 },
    { name: 'MR Naol', specialty: 'BodyBuilder', img: Top1 },
    { name: 'MR Alex', specialty: 'Cardio Strength', img: Top2 },
    { name: 'MS Lisa', specialty: 'Yoga Instructor', img: Top3 },
    { name: 'MR Alex', specialty: 'Cardio Strength', img: Top2 },
    { name: 'MR Naol', specialty: 'BodyBuilder', img: Top1 }
];

function Trainers() {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={1}
                slidesPerView={2}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                className=""
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 1,
                    },
                    560: {
                        slidesPerView: 2,
                        spaceBetween: 1,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 1,
                    },
                    1024: {
                        slidesPerView: 4.5,
                        spaceBetween: 1,
                    },
                }}
            >
                <div className="flex flex-wrap  bg-black ">
                    {trainers.map((trainer) => (
                        <SwiperSlide key={trainer.name} className="gap-1 mx-1 px-3  rounded-xl flex justify-evenly ms-16">
                            <Trainer couch={trainer} />
                        </SwiperSlide>
                    ))}
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </Swiper>
        </div>
    );
}

function Trainer({ couch }) {
    return (
        <div className=" bg-[#EDEDE5] rounded-xl ">
            <div className="mb-3 w-full">
                <div className="mb-2 overflow-hidden rounded trainerimg">
                    <img src={couch.img} alt="image" className="w-full" />
                </div>
                <div className='justify-center text-center dark:text-[#345671]'>
                    <h3 className=" inline-block text-lg font-semibold  hover:text-primary xl:text-xl leading-4" >
                        {couch.name}
                    </h3>
                    <p className="text-base text-body-color">{couch.specialty}</p>
                </div>
            </div>
        </div>
    );
}

export default Trainers;