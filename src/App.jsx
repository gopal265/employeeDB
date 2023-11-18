import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import DashBoard from './components/DashBoard'
import Employees from './components/Employees'

function App() {
  // used to change the tab between dashboard and user(employees data)
  const [tab,setTab] = useState("dashboard")
  

  return (
    <div className='w-screen min-h-screen h-fit bg-image1 bg-cover'>
    <BrowserRouter >
      <Routes>

        <Route path='/' Component={Login} />
        <Route path='/home' element={tab === "dashboard" ? <DashBoard tab={tab} setTab={setTab} /> : <Employees tab={tab} setTab={setTab} />} />
      
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
