import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Edit from './Pages/Edit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Meme Generator</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/edit' element={<Edit/>}/>
      </Routes>
    </>
  )
}

export default App
