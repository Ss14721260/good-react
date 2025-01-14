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
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
          <h1 className='text-center text-white'>Password Generator </h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder="password"
          readOnly
        />
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
          Copy
        </button>
        </div>
        <div className="flex fap-x-2 text-sm"></div>
        <div className="flex items-center gap-x-1 ">

          <input type="range" 
          min={8}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
          <div className="flex items-center gap-x-1 ">

           <input type="checkbox" 
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
        /> <label htmlFor="numberInput">Numbers</label>
          </div>
           

      </div>
    </>
  )
}

export default App
