import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import MangerDashboard from './components/ManagmentDasboard/MangerDashboard';
import './assets/css/aos.min.css';
import './assets/css/style.css';
import './assets/css/tailwind.css';
import './assets/css/tiny-slider.css'

import CallerDashboard from './components/CallerDashboard/CallerDashboard';
import CallProcessing from './components/CallProcessing/CallProcessing';
import Login from './components/User/Login/Login';
import Register from './components/User/Register/Register';
import CallerStats from "./components/CallerStats/CallerStats";
function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Navigate to={'login'}/>} />
      <Route path="/caller-dashboard" element={<CallerDashboard/>} />
      <Route path="/call-processing" element={<CallProcessing/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
         <Route path="/mdashboard" element={<MangerDashboard/>} />
        <Route path="/caller-stats" element={<CallerStats/>} />

    </Routes>
    </BrowserRouter>
 
  );
}

export default App;
