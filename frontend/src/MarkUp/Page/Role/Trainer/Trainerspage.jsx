import React from 'react'
import { useState } from "react";
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards, HiMenu } from "react-icons/hi";
import avatar from '../../../../assets/avater.png'
import { Link, Navigate, Outlet } from 'react-router-dom'
import Notification from '../../../../assets/bell.png'
import Message from '../../../../assets/messenger.png'



function Trainerspage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <>
            <div className="flex h-screen w-full ">
                {isSidebarOpen ? <div className={` fixed top-0 left-0 h-full shadow-lg transition-transform transform ${isSidebarOpen ? "translate-x-0 " : "-translate-x-full"} md:translate-x-0 `}>
                    <div className="">


                        <Sidebar>

                            <Sidebar.Logo>
                                <p className="pt-4 text-[21px] ">Online fitness traning</p>
                            </Sidebar.Logo>
                            <div className="justify-center mt-10 text-center">
                                <div className="flex justify-center align-middle text-center">
                                    <img src={avatar} alt="Avatar" className="h-20 w-20 rounded-full" /></div>
                                <div className="mt-3">
                                    <p className=" text-lg font-bold">Mr Trainer</p>
                                    <p className="text-[16px] text-gray-500">Trainer</p>
                                </div>
                            </div>
                            <Sidebar.Items>
                                <Sidebar.ItemGroup>
                                    <Link  >
                                        <Sidebar.Item href="#" icon={HiChartPie}>
                                            My account
                                        </Sidebar.Item>
                                    </Link>
                                    <Link >
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
                                <img src={Message} alt="Message Icon" className="h-5 w-5" />
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
                    <main className=" w-full flex-1 pb-6  pt-16">
                        <p>Welcome</p>
                    </main>
                </div>
            </div >
        </>
    )
}

export default Trainerspage


