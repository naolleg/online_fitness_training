import { useState, Navigate } from 'react'
import './App.css'
import TrainerList from './MarkUp/Page/Role/Admin/TrainerList'
import TrainerRegistration from './MarkUp/Page/Role/Admin/TrainerRegistration'
import { Routes, Route } from 'react-router-dom'
import Dashborad from './MarkUp/Page/Role/Admin/Dashborad'
import Analysis from './MarkUp/Page/Role/Admin/Analysis'
import TraineeReg from './MarkUp/Page/Role/Admin/TraineeReg'
import TraineeList from './MarkUp/Page/Role/Admin/TraineeList'
import Login from './MarkUp/Page/Common/Login'
import PopularTrainer from './MarkUp/Component/Role/Admin/PopularTrainer'
import AdminProfile from './MarkUp/Page/Role/Admin/AdminProfile'
import Home from './MarkUp/Page/Common/Home'
import Trainerspage from './MarkUp/Page/Role/Trainer/Trainerspage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Dashborad />} >
          <Route index element={<Navigate replace to='analysis' />} />
          <Route path='trainerList' element={<TrainerList />} />
          <Route path='analysis' element={<Analysis />} />
          <Route path='traineeList' element={<TraineeList />} />
          <Route path='Profile' element={<AdminProfile />} />
        </Route>
        <Route path='trainerReg' element={<TrainerRegistration />} />
        <Route path='traineeReg' element={<TraineeReg />} />
        <Route path='login' element={<Login />} />
        <Route path='popularTrainer' element={<PopularTrainer />} />
        <Route path='trainer' element={<Trainerspage />} />




      </Routes>
    </>
  )
}

export default App
