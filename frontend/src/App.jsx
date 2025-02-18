import { useState } from 'react'
import { LoginPage , SignupPage } from './Routes/Routes'
import { Routes , Route } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <>
      <Routes>
         <Route path='/Login' element = {<LoginPage/>} />
         <Route path='/Signup' element = {<SignupPage/>}/>
         
      </Routes>
    </>
  )
}

export default App
