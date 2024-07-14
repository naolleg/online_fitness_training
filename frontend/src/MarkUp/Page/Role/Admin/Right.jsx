import React from 'react'
import Analysis from './Analysis'
import TrainerList from './TrainerList'
import TraineeList from './TraineeList'

function Right({ showAnalysis, showtrainers, showTrainee }) {
    return (
        <>

            {showAnalysis ? <Analysis /> : ""}
            {showtrainers ? <TrainerList /> : ""}
            {showTrainee ? <TraineeList /> : ""}



        </>
    )
}

export default Right