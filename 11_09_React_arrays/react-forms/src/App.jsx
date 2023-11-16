import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UnControlledForm from './components/UnControlledForm'
import ControlledForm from './components/ControlledForm'
function App() {

  return (
    <div>
      <h1>Controlled Form</h1>
      <ControlledForm/>
      <h1>UnControlled Form</h1>
      <UnControlledForm/>
    </div>
     
    
  )
}

export default App
