import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TodoForm from './components/TodoForm'
import Todos from './components/todos'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-screen  bg-slate-200' >
      <TodoForm />
      <Todos/>
      </div>
    </>
  )
}

export default App
