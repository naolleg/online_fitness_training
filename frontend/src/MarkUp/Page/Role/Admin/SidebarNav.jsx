{/*import React from 'react';
import { Link } from 'react-router-dom';
import Trainer from '../../../../assets/coach.png';
import Trainee from '../../../../assets/trainne.png';
import LogOut from '../../../../assets/logout.png';
import Report from '../../../../assets/report.png';
import Dashboard from '../../../../assets/dashboard.png';

function Sidebar({ onhandledashboard, onhandletrainer, onhandletrainee }) {
    return (
        <div className="w-1/4  h-screen py-6  text-white">
            <div className="mb-8 px-4">
                <p className="text-3xl font-bold text-center">Online Fitness Training</p>
            </div>
            <nav className='ps-4 '>
                <ul className="space-y-4">
                    <li>
                        <Link to="analysis" onClick={onhandledashboard} className="flex items-center py-3 ps-2 rounded-s-lg hover:bg-white hover:text-black transition duration-300">
                            <img src={Dashboard} alt="Dashboard" className="w-8 h-8 mr-3" />
                            <span className="text-lg">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="trainerList" onClick={onhandletrainer} className="flex items-center py-3 ps-2 rounded-s-lg hover:bg-white hover:text-black transition duration-300">
                            <img src={Trainer} alt="Trainer" className="w-8 h-8 mr-3" />
                            <span className="text-lg">Trainers</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="traineeList" onClick={onhandletrainee} className="flex items-center py-3 ps-2 rounded-s-lg hover:bg-white hover:text-black transition duration-300">
                            <img src={Trainee} alt="Trainee" className="w-8 h-8 mr-3" />
                            <span className="text-lg">Trainees</span>
                        </Link>
                    </li>
                    <li className="flex items-center py-3 ps-2 rounded-s-lg hover:bg-white hover:text-black transition duration-300">
                        <img src={Report} alt="Reports" className="w-8 h-8 mr-3" />
                        <span className="text-lg">Reports</span>
                    </li>
                </ul>
            </nav>
            <div className="mt-auto pt-4 ps-3">
                <div className="flex items-center py-2 ps-2 rounded-s-lg hover:bg-white hover:text-black transition duration-300 cursor-pointer">
                    <img src={LogOut} alt="Logout" className="w-8 h-8 mr-3" />
                    <span className="text-lg">Logout</span>
                </div>
            </div> 
        </div>
    );
}

export default Sidebar;*/}




import { useState } from "react";
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards, HiMenu } from "react-icons/hi";
import avatar from '../../../../assets/avater.png'
import { Link } from 'react-router-dom'
import Analysis from "./Analysis";
import TrainerList from "./TrainerList";
import TraineeList from "./TraineeList";
export default function SidebarNav({ onhandledashboard, showAnalysis, showtrainers, showTrainee, onhandletrainer, onhandletrainee }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen w-full ">
            {isSidebarOpen ? <div className={`fixed top-0 left-0 h-full bg-gray-800 shadow-lg transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 `}>

                <Sidebar aria-label="Sidebar with logo branding example" >
                    <Sidebar.Logo  >
                        <p className="pt-4 text-[21px]">Online fitness traning</p>
                    </Sidebar.Logo>
                    <div className="justify-center mt-10 text-center">
                        <div className="flex justify-center align-middle text-center">
                            <img src={avatar} alt="Avatar" className="h-16 w-16 rounded-full" /></div>
                        <div className="mt-3">
                            <p className=" text-lg font-bold">Mr Someone</p>
                            <p className="text-[16px] text-gray-500">Admin</p>
                        </div>
                    </div>
                    <Sidebar.Items>

                        <Sidebar.ItemGroup>
                            <Link to='analysis' onClick={onhandledashboard}>
                                <Sidebar.Item href="#" icon={HiChartPie}>
                                    Dashboard
                                </Sidebar.Item>
                            </Link>
                            <Link to='trainerList' onClick={onhandletrainer}>
                                <Sidebar.Item href="#" icon={HiViewBoards}>
                                    Trainers
                                </Sidebar.Item>
                            </Link>
                            <Link to='traineeList' onClick={onhandletrainee}>
                                <Sidebar.Item href="#" icon={HiInbox}>
                                    Trainee
                                </Sidebar.Item></Link>
                            <Sidebar.Item href="#" icon={HiUser}>
                                Users
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={HiTable}>
                                logout
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </div>

                : ""
            }

            <div className={` flex-1 flex flex-col ${isSidebarOpen ? 'ml-64' : 'ml-0'} transition-all duration-300`}>
                <header className="flex items-center p-4  fixed ">
                    <svg onClick={toggleSidebar} xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" ><path fill="black" d="M3 4h18v2H3zm0 7h18v2H3zm0 7h18v2H3z"></path></svg>
                </header>
                <main className=" w-full flex-1 p-6 mt-16">
                    {showAnalysis ? <Analysis /> : ""}
                    {showtrainers ? <TrainerList /> : ""}
                    {showTrainee ? <TraineeList /> : ""}
                </main>
            </div>
        </div >
    );
}

