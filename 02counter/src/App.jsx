import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  //let counter = 15

  const [counter, setCounter] = useState(15)  // useState naam ka hook use kar rahe hai jo ki ek array deta hai jisme first varible hai aur dusra ek function hai 
                                              //  ye hook me agar tum kuchh change karoge to ye user interface me bhi dikhega aise sirf console me dikh raha tha but ui me wo update nahi ho raha tha
                                              // har jagh hi ye value change hogi agar kahi bhi wo varible use kiya to counter wala
  const addValue =() => {
    //  counter = counter + 1
    // console.log("clicked", counter);
    setCounter((prevCounter)=> prevCounter+1)
     setCounter((prevCounter)=> prevCounter+1)
      setCounter((prevCounter)=> prevCounter+1)
       setCounter((prevCounter)=> prevCounter+1)

   
  }

  const removeValue = ()=>{
    if(counter >= 1){
      setCounter(counter-1)
    } else{
      setCounter(0);
    }
  }

  return (
   <>
   <h1>chai aur react</h1>
   <h2>Counter Value: {counter}</h2>

   <button onClick = {addValue}>Add Value {counter}</button>
   
  <br />
  <button
  onClick={removeValue}>Remove Value {counter}</button>
  <p>footer: {counter}</p>
   </>
  )
}

export default App
