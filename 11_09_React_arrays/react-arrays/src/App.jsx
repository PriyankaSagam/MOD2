import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DogArray from './components/DogArray.'
import ObjectExample from './components/ObjectExample.'
import UseRefExample from './components/UseRefExample'
import ArrayExample from './components/ArrayExample'
function App() {
 

  return (
    <>
   <h1>this is Dog App</h1>
    {/* <DogArray />
    <ObjectExample />
    <UseRefExample/> */}
    <ArrayExample/>
    </>
  )
}

export default App
