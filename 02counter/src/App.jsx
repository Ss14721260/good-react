import { useState} from 'react'
import './App.css'
function App() {
  const [a,ad1] = useState(0)
  const addValue = () => { 
    ad1(a+1)
  }
  return (
   <>   
    <h1>React with Suraj</h1>
  
    <h2>Counter value:</h2>
      <button onClick={addValue}>Click to Add value in A: {a}</button>
      <br />
      <h2>total clicks on A: {a} </h2>
      <br />
    
      </>  
    
  )
}

export default App;
