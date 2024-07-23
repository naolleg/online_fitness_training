import React from 'react';
import heroImage from '../../../assets/hero.jpg';

const HeroSection = () => {
    return (
        <div className="relative w-full flex flex-col md:flex-row text-white bg-white ">
            <div className="absolute inset-0 md:hidden">
                <img
                    src={heroImage}
                    alt="Fitness"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="relative w-full md:w-1/2 bg-[#345671] flex flex-col justify-center p-8 md:p-16 dark:text-white dark:bg-gray-800 ">
                <p className="font-bold text-3xl md:text-5xl mb-4 md:mb-6 leading-tight md:leading-none">
                    Elevate Your Fitness Journey with Our Elite Online Coaching.
                </p>
                <p className="text-sm md:text-lg mb-6 leading-relaxed md:leading-normal">
                    Work one-on-one with our top trainers to transform your body, boost your energy, and improve your health. Get personalized workouts, science-backed nutrition guidance, and dedicated support to help you succeed. Become stronger, fitter, and unstoppable.
                </p>
                <div className="flex justify-center md:justify-start">
                    <button className="bg-white hover:bg-gray-200 text-[#345671] px-6 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105  dark:text-white dark:bg-gray-900">
                        Start Training
                    </button>
                </div>
            </div>
            <div className="hidden md:flex relative w-full md:w-1/2 items-center justify-center overflow-hidden">
                <img
                    src={heroImage}
                    alt="Fitness"
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                />
                <p className="relative text-5xl md:text-7xl text-black font-bold transform -rotate-90 md:rotate-0 z-10">
                    Fitness
                </p>
            </div>
        </div>
    );
};

export default HeroSection;
