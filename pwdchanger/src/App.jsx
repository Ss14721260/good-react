import { useState, useCallback } from "react"
function App() {
const [length, setLength]= useState(8);
const [numberAllowed,setNumberAllowed]= useState(false);
const [charAllowed,setcharAllowed]= useState(false);
const [password,setPassword]= useState("");
const passwordGenrator = useCallback(() => {
  let pass="";
  let str="abcdefghijkamnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numberAllowed) str+="0123456789"
  if (charAllowed) str+="~!@#$%^&*[+]-_={}?/";
  for(let i=0;i<length;i++){
    let char = Math.random() * str.length + 1;
    let pass = str.charAt(char);
    setPassword(pass);
  }
}, [length, numberAllowed, charAllowed, setPassword])

  return (
    <>
      <div className="w-full max-w-md max-auto shadow-md 
        rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
          <h1 className="text-center text-white">
          Password Generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
          type="text" 
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
        />
        </div>
        
      </div>
 
    </>
  )
}

export default App
