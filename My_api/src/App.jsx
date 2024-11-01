import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Usertable from './components/Usertable'
import Newtable from './components/Newtable'
import Listmap from './components/Listmap'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    
    <Routes>
    <Route path='/t1' element={<Usertable/>}/>
    <Route path='/t2' element={<Newtable/>}/>
    <Route path='/t3' element={<Listmap/>}/>
    </Routes>
    </>
  )
}

export default App
