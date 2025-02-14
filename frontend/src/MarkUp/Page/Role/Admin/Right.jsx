import React from 'react'
import Analysis from './Analysis'
import TrainerList from './TrainerList'
import TraineeList from './TraineeList'
import AdminProfile from './AdminProfile'
import { Navigate, Outlet } from 'react-router-dom'

function Right({ showAnalysis, showtrainers, showTrainee, showAdminProfile }) {
    return (
        <>


            {showAnalysis ? <Analysis /> : ""}
            {showtrainers ? <TrainerList /> : ""}
            {showTrainee ? <TraineeList /> : ""}
            {showAdminProfile ? <AdminProfile /> : ""}



        </>
    )
}

export default Right