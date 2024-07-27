import React, { useContext } from 'react'
import { useState } from "react";
import { Sidebar } from "flowbite-react";
import { HiChartPie, HiTable, HiViewBoards, } from "react-icons/hi";
import avatar from '../../../../assets/avater.png'
import { Link } from 'react-router-dom'
import Notification from '../../../../assets/bell.png'
import TrainerProfile from './TrainerProfile';
import Listes from './Listes';



function Trainerspage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [account, setAccount] = useState(false)
    const [listTrainee, setlistTrainee] = useState(false)
    const [isDisplay, setisDisplay] = useState(true)


    function handletranerlist() {
        setisDisplay(false)
        setlistTrainee(true)
        setAccount(false)
    }
    function handleProfile() {
        setisDisplay(false)
        setlistTrainee(false)
        setAccount(true)
    }


    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className="flex h-screen w-full ">
                {isSidebarOpen ? <div className={` fixed top-0 left-0 h-full shadow-lg transition-transform transform ${isSidebarOpen ? "translate-x-0 " : "-translate-x-full"} md:translate-x-0 `}>
                    <div>
                        <Sidebar >
                            <Sidebar.Logo className=''>
                                <p className="pt-4 text-[21px] ">Online fitness traning</p>
                            </Sidebar.Logo>
                            <div className="justify-center pt-10 text-center">
                                <div className="flex justify-center align-middle text-center">
                                    <img src={avatar} alt="Avatar" className="h-20 w-20 rounded-full" /></div>
                                <div className="mt-3">
                                    <p className=" text-lg font-bold">Mr Trainer</p>
                                    <p className="text-[16px] text-gray-500">Trainer</p>
                                </div>
                            </div>
                            <Sidebar.Items className=''>
                                <Sidebar.ItemGroup className=''>
                                    <Link
                                        onClick={handleProfile} to='trainerProfile'>
                                        <Sidebar.Item href="#" icon={HiChartPie}>
                                            My account
                                        </Sidebar.Item>
                                    </Link>
                                    <Link to='traineelists'
                                        onClick={handletranerlist}>
                                        <Sidebar.Item href="#" icon={HiViewBoards}>
                                            Trainee list
                                        </Sidebar.Item>
                                    </Link>
                                    <Sidebar.Item href="#" icon={HiTable}>
                                        logout
                                    </Sidebar.Item>
                                </Sidebar.ItemGroup>
                            </Sidebar.Items>
                        </Sidebar>
                    </div>
                </div>
                    : ""
                }
                <div className={`h-screen flex-1 flex flex-col ${isSidebarOpen ? 'ml-64' : 'ml-0'} transition-all duration-300`}>
                    <header className="flex items-center p-4  fixed ">
                        <svg onClick={toggleSidebar} xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" ><path fill="black" d="M3 4h18v2H3zm0 7h18v2H3zm0 7h18v2H3z"></path></svg>
                    </header>
                    <div className="flex justify-end me-10 mt-4">
                        <ul className="flex gap-6 items-center">
                            <li>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 h-10 w-64"
                                />
                            </li>
                            <li>
                                <img src={Notification} alt="Notification Icon" className="h-5 w-5 rounded-full" />
                            </li>
                            <li>
                                <img src={avatar} alt="Avatar" className="h-8 w-8 rounded-full" />
                            </li>
                        </ul>
                    </div>
                    <hr className="w-full  mt-1" />
                    <main className=" w-full flex-1 pb-6  pt-16 bg-slate-100 p-3">
                        {isDisplay && <p>Welcome</p>}
                        {account && <TrainerProfile />}
                        {listTrainee && <Listes />}
                    </main>
                </div>
            </div >
        </>
    )
}
export default Trainerspage


