import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")
  return (
    <>
<div className="w-full h-screen duration-200" 
style={{backgroundColor: color}}
>

  <div className="fixed flex justify-center flex-wrap text-black inset-x-0 px-3 py-2 text-5xl font-bold">Background Changer website</div>
  <div className="fixed flex justify-center flex-wrap  bottom-12 inset-x-0 px-2 text-2xl font-bold">
    <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-600"
      onClick={() => setColor("red")}>Red</button>
      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-600"
      onClick={() => setColor("blue")}>Blue</button>
      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black"
      onClick={() => setColor("black")}>Black</button>
      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-400"
      onClick={() => setColor("Green")}>Green</button>
      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-pink-600"
      onClick={() => setColor("Pink")}>Pink</button>
      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-gray-600"
      onClick={() => setColor("gray")}>Gray</button>
      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-purple-600"
      onClick={() => setColor("purple")}>Purple</button>
      <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-white"
      onClick={() => setColor("white")}>White</button>
      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-600"
      onClick={() => setColor("yellow")}>yellow</button>

    </div>
  </div>
  </div>
  </>
  )
}

export default App
