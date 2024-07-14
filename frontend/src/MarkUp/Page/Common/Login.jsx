import React, { useState } from 'react';
import loginBg from '../../../assets/loginBg.jpeg';
function Login(props) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    };
    return (
        <>
            <div
                className="bg-red-200 w-full h-screen bg-cover bg-around"
                style={{
                    backgroundImage: `url(${loginBg})`,
                }}>

                <nav className='text-white px-10 text-lg'>
                    <ul className='flex justify-between px-10'>
                        <div className='pt-4'>
                            <li className='text-xl font-bold'>Logo</li>
                        </div>
                        <div className='flex justify-between gap-10 pt-4'>
                            <div className='flex gap-6'>
                                <li className='hover:text-yellow-300 transition duration-300 ease-in-out'>Home</li>
                                <li className='hover:text-yellow-300 transition duration-300 ease-in-out'>Programs</li>
                                <li className='hover:text-yellow-300 transition duration-300 ease-in-out'>Pricing</li>
                                <li className='hover:text-yellow-300 transition duration-300 ease-in-out'>Trainers</li>
                            </div>
                            <div className='flex gap-4'>
                                <li className='bg-red-700 hover:bg-red-800 px-3 py-1 rounded-lg transition duration-300 ease-in-out'>
                                    <button>Login</button>
                                </li>
                                <li className='px-2 mt-2 rounded-lg transition duration-300 ease-in-out'>
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            value=""
                                            className="sr-only peer"
                                            checked={isDarkMode}
                                            onChange={toggleDarkMode}
                                        />
                                        <div className={`relative w-11 h-6 ${isDarkMode ? 'bg-gray-700 dark:bg-gray-200' : 'bg-gray-200'} rounded-full   dark:peer-focus:ring-black peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black`} />
                                        <span className={`flex items-center justify-center ms-3 text-sm font-medium ${isDarkMode ? 'text-gray-300 dark:text-gray-900' : 'text-gray-900 dark:text-gray-300'}`}>
                                            {isDarkMode ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 256 256" className="fill-white">
                                                    <path fill="white" d="M230.72 145.06a4 4 0 0 0-4-1A92.08 92.08 0 0 1 111.94 29.27a4 4 0 0 0-5-5a100.78 100.78 0 0 0-50.86 35.61a100 100 0 0 0 140 140a100.78 100.78 0 0 0 35.59-50.87a4 4 0 0 0-.95-3.95m-39.42 48.47A92 92 0 0 1 62.47 64.7a93 93 0 0 1 39.88-30.35a100.09 100.09 0 0 0 119.3 119.3a93 93 0 0 1-30.35 39.88"></path>
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 15 15" className="stroke-white">
                                                    <path fill="none" stroke="white" strokeLinecap="square" d="M7.5 1.5v-1m0 13.99v-.998m6-5.997h1m-13 0h-1m2-4.996l-1-1m12 0l-1 1m-10 9.993l-1 1m12 0l-1-1m-2-4.997a2.999 2.999 0 0 1-3 2.998a2.999 2.999 0 1 1 3-2.998Z"></path>
                                                </svg>
                                            )}
                                        </span>
                                    </label>
                                </li>

                            </div>
                        </div>
                    </ul>
                </nav>

                <div className='flex justify-center mt-20'>
                    <div className="relative w-full max-w-sm p-4 bg-white bg-opacity-45 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                            <img src="../../../assets/" alt="Avatar" className="w-20 h-20 rounded-full border-2 border-gray-300" />
                        </div>
                        <form className="space-y-4 mt-4" action="#">
                            <h5 className="text-xl font-medium text-gray-800">Sign in</h5>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-800">Your email</label>
                                <input type="email" name="email" id="email" className="border-b-2 text-gray-800 text-sm rounded-lg block w-full p-2.5" placeholder="name@gmail.com" required />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-800">Your password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
                                    </div>
                                    <label className="ml-2 text-sm font-medium text-gray-800">Remember me</label>
                                </div>
                                <a href="#" className="ml-auto text-sm hover:underline text-gray-800">Lost Password?</a>
                            </div>
                            <button type="submit" className="w-full text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
                            <div className="text-sm font-medium text-gray-800">
                                Not registered? <a href="#" className="hover:underline text-red-900">Create account</a>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Login;
