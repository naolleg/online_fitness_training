import React, { useState } from 'react'
import Sidebar from './SidebarNav'
import Right from './Right'

function Dashborad() {

    const [showAnalysis, setShowAnalysis] = useState(false);
    const [showtrainers, setShowtrainers] = useState(false);
    const [showTrainee, setShowtrainee] = useState(false);
    // const [showAnalysis, setShowAnalysis] = useState(false);

    const handleDashboardClick = () => {
        setShowAnalysis(true);
        setShowtrainers(false)
        setShowtrainee(false)
    };

    const handleTrainer = () => {
        setShowtrainers(true)
        setShowAnalysis(false);
        setShowtrainee(false)
    }
    const handleTrainee = () => {
        setShowtrainee(true)
        setShowtrainers(false)
        setShowAnalysis(false);
    }
    return (
        <>
            <div className='flex'>
                <Sidebar showAnalysis={showAnalysis} onhandledashboard={handleDashboardClick} showtrainers={showtrainers} onhandletrainer={handleTrainer} showTrainee={showTrainee} onhandletrainee={handleTrainee} />
                {/* <Right /> */}
            </div>

        </>
    )
}

export default Dashborad