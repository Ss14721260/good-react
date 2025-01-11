import { useState} from 'react'
import './App.css'
function App() {
  const [a,ad1] = useState(0)
  const [sum,setSum] = useState(0)
  const addValue = () => { 
    ad1(a+1)
  }

  //Another functon for interview purpose: 
  const Sum =  ()  =>{
    // setSum(sum+3) 
    // setSum(sum => sum+1)
    // setSum(sum => sum+1)
    // setSum(sum => sum+1)
    // setSum(sum => sum+1)
    // setSum(sum => sum+1)
    // setSum(sum +5)
    // setSum(prevsum => prevsum+5)
    setSum(sum+1)

    
    
   
  }
  
  return (
   <>   
    <h1>React with Suraj</h1>
  
    <h2>Counter value A: {a}</h2>
    <button onClick={addValue}>Click me: {a}</button>
    <button onClick={Sum}>Click me Sum: {sum}</button>
      
  
      </>  
    
  )
}

export default App;
