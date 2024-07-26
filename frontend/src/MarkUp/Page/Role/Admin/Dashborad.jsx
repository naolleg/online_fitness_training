import React, { useState } from 'react'
import Sidebar from './SidebarNav'
import Right from './Right'
import { Navigate, Outlet } from 'react-router-dom';

function Dashborad() {

    const [showAnalysis, setShowAnalysis] = useState(false);
    const [showtrainers, setShowtrainers] = useState(false);
    const [showTrainee, setShowtrainee] = useState(false);
    const [showAdminProfile, setShowAdminProfile] = useState(false);
    // const [showAnalysis, setShowAnalysis] = useState(false);

    const handleDashboardClick = () => {
        setShowAnalysis(true);
        setShowtrainers(false)
        setShowtrainee(false)
        setShowAdminProfile(false)

    };

    const handleTrainer = () => {
        setShowtrainers(true)
        setShowAnalysis(false);
        setShowtrainee(false)
        setShowAdminProfile(false)

    }
    const handleTrainee = () => {
        setShowtrainee(true)
        setShowtrainers(false)
        setShowAnalysis(false);
        setShowAdminProfile(false)

    }
    const handleAdminProfile = () => {
        setShowAdminProfile(true)
        setShowtrainee(false)
        setShowtrainers(false)
        setShowAnalysis(false);

    }
    return (
        <>
            <div className='flex'>
                <Sidebar
                    showAnalysis={showAnalysis}
                    onhandledashboard={handleDashboardClick}
                    showtrainers={showtrainers}
                    onhandletrainer={handleTrainer}
                    showTrainee={showTrainee}
                    onhandletrainee={handleTrainee}
                    showAdminProfile={showAdminProfile}
                    onhandleAdminProfile={handleAdminProfile}

                />
                {/* <Right /> */}


            </div>

        </>
    )
}

export default Dashborad