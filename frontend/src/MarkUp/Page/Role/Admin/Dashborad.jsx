import React, { useState } from 'react'
import Sidebar from './Sidebar'
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
                <Sidebar onhandledashboard={handleDashboardClick} onhandletrainer={handleTrainer} onhandletrainee={handleTrainee} />
                <Right showAnalysis={showAnalysis} showtrainers={showtrainers} showTrainee={showTrainee} />
            </div>

        </>
    )
}

export default Dashborad