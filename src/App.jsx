import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Layouts/Navbar'
import Homepage from './Section/Homepage'
import TodoList from './Section/TodoList'

function App() {
  let [Todos,setTodos] = useState([]);

  return (
    <>
    <Navbar/>
    <Homepage todos={Todos} setTodos={setTodos}/>
    <TodoList todos={Todos}/>
    </>
  )
}

export default App
