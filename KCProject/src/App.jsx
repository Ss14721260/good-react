import { useState } from "react"

function App() {
  const [color, setColor]=useState("olive")

  return (
    <>

    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>

    <div className="flex flex-wrap items-center w-full max-w-lg mx-auto p-4">
        <div className="w-full justify-center bg-gray-500 rounded-lg">
        <h1 className="text-2xl font-bold pt-0.5 pb-14 text-center">KCProject</h1>
        <div className="flex flex-wrap gap-3">
        <button className="bg-red-800 my-3 rounded-md p-2 text-white" onClick={() => setColor('Red')}>Red</button>
        <button className="bg-blue-800 my-3 rounded-md p-2 text-white" onClick={() => setColor('blue')}>Blue</button>
        <button className="bg-green-800 my-3 rounded-md p-2 text-white" onClick={() => setColor('green')}>Green</button>
        <button className="bg-black my-3 rounded-md p-2 text-white" onClick={() => setColor('black')}>Black</button>
        <button className="bg-pink-600 my-3 rounded-md p-2 text-white" onClick={() => setColor('pink')}>Pink</button>
        <button className="bg-gray-600 my-3 rounded-md p-2 text-white" onClick={() => setColor('gray')}>Gray</button>
        <button className="bg-sky-500 my-3 rounded-md p-2 text-white" onClick={() => setColor('skyblue')}>SkyBlue</button>
        
            

        </div>
        </div>
        </div>
        <div className="flex flex-wrap items-center w-full max-w-lg mx-auto p-4">
        <div className="w-full justify-center bg-gray-500 rounded-lg">
          
    </div>
    </div>
      </div>
    </>
  )
}

export default App
