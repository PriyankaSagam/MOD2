// this useState is what is called a hook
// there are several react hooks that we will be using
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // initiate counter at 0, setCounter let's me update counter
  // useState() is a built in method - that's the useState hook
  // you can put the initial value of the state as an input argument
  // so in this example, my initial value is 0, because that's what I'm passing in
  // useState() returns an array with two things,
  // the state variable
  // the function that we can use to update the state variable
  // -- this is declaring the state --
  const [counter, setCounter] = useState(0)
  // this would be like
  //    let counter = 0;
  // === this is another piece of state ===
  const [evenCounter, setEvenCounter] = useState(0);
  // the naming convention is
  // const [stateName, setStateName] = useState(initialValue)
  // const [sampleArray, setSampleArray] = useState([])

    //making sure console.log only runs on certain renders
    // useEffect has two parts
    // the functionality that will happen
    // when it will happen - the dependency array
    //      if the dependency array is empty [], then useEffect only runs when the component first loads
    useEffect(() => {
      console.log("I'm just a random log")
    }, [evenCounter])

    // Function to add one to the state
  const addOne = () => {
    // if counter is even before the update, update evenCounter
    if (counter % 2 === 0) {
      setEvenCounter(evenCounter + 1)
    }
    // sets counter to its current value + 1
    setCounter(counter + 1)
  }

  // example of updating an array
  //   // create a unique copy of the array
  // const updatedState = [...state]
  // // modify the new array
  // updatedState[0] = 6
  // // set the State to the updatedArray, DOM will update
  // setState(updatedState)

  // The h1 display the counter and button runs addOne function
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <h1>Even Counter: {evenCounter}</h1>
      <button onClick={addOne}>Click Me to Add One</button>
    </div>
  )
}

export default App