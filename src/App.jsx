import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import UseMemo from './components/UseMemo'
import UseEffect from './components/UseEffect'
// import Counter from './components/Hooks/Counter'

function App() {
  // const [count, setCount] = useState(0);

  const user={
    name: "John Doe",
    email: "john.doe@example.com"
  }

  return (
   <>
   
   {/* <h1> Hello, React!</h1>
   <Counter/> */}

   {/* <Navbar/> */}

   <Dashboard user={user}/>

   <UseMemo/>
   <UseEffect/>

   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/home' element={<Home/>}/>
   <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
   <Route path='*' element={<NotFound/>}/>
    </Routes>
   
   </>
  )
}

export default App
