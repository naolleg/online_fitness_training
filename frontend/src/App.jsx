import { useState } from 'react'
import './App.css'
import TrainerList from './MarkUp/Page/Role/Admin/TrainerList'
import TrainerRegistration from './MarkUp/Page/Role/Admin/TrainerRegistration'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/trainerList' element={<TrainerList />} />
        <Route path='/trainerReg' element={<TrainerRegistration />} />
      </Routes>
    </>
  )
}

export default App
