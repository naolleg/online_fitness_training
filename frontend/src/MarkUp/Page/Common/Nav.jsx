import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <nav className="bg-[#345671] dark:bg-gray-800 shadow-md ">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-3">
                    <div className="flex items-center">
                        <span className="font-semibold text-xl text-white dark:text-white">Logo</span>
                    </div>
                    <div className="hidden md:flex space-x-4 ">
                        <a href="#" className="text-white dark:text-white hover:text-blue-500">Home</a>
                        <a href="#" className="text-white dark:text-white hover:text-blue-500">Program</a>
                        <a href="#" className="text-white dark:text-white hover:text-blue-500">Trainers</a>
                        <a href="#" className="text-white dark:text-white hover:text-blue-500">Contact</a>
                    </div>
                    <div className="flex items-center">
                        <button className='bg-white duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200 text-[#345671] text-sm  py-1 px-2 mx-4 rounded-[5px] dark:text-white dark:bg-gray-900'>Login</button>

                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="focus:outline-none text-white dark:text-white"
                        >
                            {darkMode ? '☀️' : '🌙'}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden ml-4 focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6 text-white dark:text-white"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                    <a href="#" className="block py-2 px-4 text-sm text-white dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">Home</a>
                    <a href="#" className="block py-2 px-4 text-sm text-white dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">Programs</a>
                    <a href="#" className="block py-2 px-4 text-sm text-white dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">Trainers</a>
                    <a href="#" className="block py-2 px-4 text-sm text-white dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
