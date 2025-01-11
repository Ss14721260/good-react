import React from 'react'
import './App.css'
import Button from './components/Button'
function App() {
  
  return (
<>
      <h1 className='bottom'>BackGround Changer</h1><br /><br />
        <div className='bg-white rounded-2xl border-2 p-2'>
      <Button color="Red"/>
      <Button color="Blue"/>
      <Button color="Black"/>
      <Button color="Pink"/>
      <Button color="Green"/>
      <Button color="White"/>
    </div>
    </>
  )
}

export default App
