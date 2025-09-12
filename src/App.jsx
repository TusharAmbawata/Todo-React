import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Layouts/Navbar'
import Homepage from './Section/Homepage'
import TodoList from './Section/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Homepage/>
    <TodoList/>
    </>
  )
}

export default App
