import Navbar from './Pages/Navbar/Navbar'
import './App.css'
import Home  from './Pages/Home/Home.jsx'
import { Route, Router, Routes } from 'react-router-dom'
import ProjectDetails from '@/Pages/projectDetails/ProjectDetails.jsx'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails/>} />
      </Routes>
      
    </>
  )
}

export default App
