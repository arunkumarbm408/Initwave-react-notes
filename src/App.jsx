import { useState } from 'react'
import './App.css'
import Counter from './components/Hooks/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
   <><h1> Hello, React!</h1>
   <Counter/>
   
   </>
  )
}

export default App
