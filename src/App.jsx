import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Layouts/Navbar'
import Homepage from './Section/Homepage'
import TodoList from './Section/TodoList'

function App() {
  let [Todos,setTodos] = useState([
    {todo:"Todo-1",
    tittle:"Tittle for Todo-1",
    description:"Description for Todo-1"},

    {todo:"Todo-2",
    tittle:"Tittle for Todo-2",
    description:"Description for Todo-2"},

  ])

  return (
    <>
    <Navbar/>
    <Homepage/>
    <TodoList todos={Todos}/>
    </>
  )
}

export default App
