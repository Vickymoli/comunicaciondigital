import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home/Home';

function App() {


  return (
 
   <div>
    <Routes>
    <Route exact path="/" element={<Home/>} />
    </Routes>
   </div>
  )
}

export default App
