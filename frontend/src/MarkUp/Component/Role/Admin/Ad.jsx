import React from 'react'
import { HiArrowRight } from 'react-icons/hi';

function Ad() {
    return (
        <>
            <div className="max-w-md  mx-auto bg-gray-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">

                    <div className="p-8">
                        <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Transform Your Body and  Training!</h2>
                        <p className="mt-2 text-gray-500">
                            Looking to get fit from the comfort of your home?
                        </p>
                        <ul className="list-disc ml-5 mt-2 text-gray-500">
                            <li>Personalized Workouts</li>
                            <li>Expert Trainers</li>
                            <li>Flexible Schedule</li>
                            <li>Supportive Community</li>
                        </ul>

                        <p className="mt-4 text-red-500 font-semibold">Sign up now and get a FREE 7-day trial! </p>

                        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200 flex items-center">
                            Start Your Free Trial <HiArrowRight className="ml-2" />
                        </button>
                        <div className="mt-4 text-gray-500">
                            Follow us on:
                            <div className="flex space-x-3 mt-2">
                                <a href="https://www.facebook.com/OnlineFitnessTraining" className="text-blue-700">Facebook</a>
                                <a href="https://www.instagram.com/OnlineFitnessTraining" className="text-pink-600">Instagram</a>
                                <a href="https://www.twitter.com/FitnessOnline" className="text-blue-500">Twitter</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Ad