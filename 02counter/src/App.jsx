import { useState} from 'react'
import './App.css'
function App() {
  const [a,ad1] = useState(0)
  const [b,ad2] = useState(0)
  const addValueIna = () => { 
    ad1(a+1)
    }
  const addValueInb = () => {
    ad2(b+1)
  }
  

  return (
   <>   
    <h1>React with Suraj</h1>
  
    <h2>Counter value:</h2>
      <button onClick={addValueIna}>Click to Add value in A: {a}</button>
      <br />
      <button onClick={addValueInb}>Click to Add value in B: {b}</button>
      <h2>Result A+B={a+b}: </h2>
      <br />
    
      </>  
    
  )
}

export default App
