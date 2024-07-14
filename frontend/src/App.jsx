import { useState } from 'react'
import './App.css'
import TrainerList from './MarkUp/Page/Role/Admin/TrainerList'
import TrainerRegistration from './MarkUp/Page/Role/Admin/TrainerRegistration'
import { Routes, Route } from 'react-router-dom'
import Dashborad from './MarkUp/Page/Role/Admin/Dashborad'
import Analysis from './MarkUp/Page/Role/Admin/Analysis'
import TraineeReg from './MarkUp/Page/Role/Admin/TraineeReg'
import TraineeList from './MarkUp/Page/Role/Admin/TraineeList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/admin' element={<Dashborad />} >
          <Route index element={<Analysis />} />
          <Route path='trainerList' element={<TrainerList />} />
          <Route path='analysis' element={<Analysis />} />
          <Route path='traineeList' element={<TraineeList />} />
        </Route>
        <Route path='trainerReg' element={<TrainerRegistration />} />
        <Route path='traineeReg' element={<TraineeReg />} />


      </Routes>
    </>
  )
}

export default App
