import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-[#345671] text-white py-8 dark:text-white dark:bg-gray-800">
            <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center mb-4 md:mb-0">
                    <span className="font-bold text-2xl">Logo</span>
                </div>
                <div>
                    <nav className="flex space-x-4 text-lg mb-4">
                        <a href="#" className="hover:text-blue-500 transition-colors duration-300">
                            Home
                        </a>
                        <a href="#" className="hover:text-blue-500 transition-colors duration-300">
                            Program
                        </a>
                        <a href="#" className="hover:text-blue-500 transition-colors duration-300">
                            Trainers
                        </a>
                        <a href="#" className="hover:text-blue-500 transition-colors duration-300">
                            Contact
                        </a>
                    </nav>
                    <div className="flex space-x-4 mt-4 md:mt-0 text-center items-center ms-[30%] ">
                        <a href="#" className="text-white hover:text-blue-500 transition-colors duration-300">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="text-white hover:text-blue-500 transition-colors duration-300">
                            <FaTwitter />
                        </a>
                        <a href="#" className="text-white hover:text-blue-500 transition-colors duration-300">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

            </div>
            <div className="container mx-auto px-4 md:px-8 mt-6">
                <p className="text-center text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Fitness Club. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;