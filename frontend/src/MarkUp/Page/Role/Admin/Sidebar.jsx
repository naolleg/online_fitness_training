import React from 'react';
import { Link } from 'react-router-dom';
import Trainer from '../../../../assets/coach.png';
import Trainee from '../../../../assets/trainne.png';
import LogOut from '../../../../assets/logout.png';
import Report from '../../../../assets/report.png';
import Dashboard from '../../../../assets/dashboard.png';

function Sidebar({ onhandledashboard, onhandletrainer, onhandletrainee }) {
    return (
        <div className="w-1/4 bg-cyan-700 h-screen py-6  text-white">
            <div className="mb-8 px-4">
                <p className="text-3xl font-bold text-center">Online Fitness Training</p>
            </div>
            <nav className='ps-4'>
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

export default Sidebar;
