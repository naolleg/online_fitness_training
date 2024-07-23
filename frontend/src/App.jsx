import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import TrainerList from './MarkUp/Page/Role/Admin/TrainerList';
import TrainerRegistration from './MarkUp/Page/Role/Admin/TrainerRegistration';
import Dashborad from './MarkUp/Page/Role/Admin/Dashborad';
import Analysis from './MarkUp/Page/Role/Admin/Analysis';
import TraineeReg from './MarkUp/Page/Role/Admin/TraineeReg';
import TraineeList from './MarkUp/Page/Role/Admin/TraineeList';
import Login from './MarkUp/Page/Common/Login';
import PopularTrainer from './MarkUp/Component/Role/Admin/PopularTrainer';
import AdminProfile from './MarkUp/Page/Role/Admin/AdminProfile';
import Home from './MarkUp/Page/Common/Home';
import Trainerspage from './MarkUp/Page/Role/Trainer/Trainerspage';
import ProtectRouth from './MarkUp/Page/Common/ProtectRouth';



function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />

      <Route
        path='/admin'
        element={
          <ProtectRouth>
            <Dashborad />
          </ProtectRouth>
        }
      >
        <Route index element={<Navigate replace to='analysis' />} />
        <Route path='trainerList' element={<TrainerList />} />
        <Route path='analysis' element={<Analysis />} />
        <Route path='traineeList' element={<TraineeList />} />
        <Route path='Profile' element={<AdminProfile />} />
      </Route>

      <Route
        path='trainerReg'
        element={
          <ProtectRouth>
            <TrainerRegistration />
          </ProtectRouth>
        }
      />

      <Route
        path='traineeReg'
        element={
          <ProtectRouth>
            <TraineeReg />
          </ProtectRouth>
        }
      />

      <Route
        path='popularTrainer'
        element={
          <ProtectRouth>
            <PopularTrainer />
          </ProtectRouth>
        }
      />

      <Route
        path='trainer'
        element={
          <ProtectRouth>
            <Trainerspage />
          </ProtectRouth>
        }
      />
    </Routes>
  );
}

export default App;
