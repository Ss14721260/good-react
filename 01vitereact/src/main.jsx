// import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import {jsx as _jsx} from "react/jsx-runtime.js"
// import New from './new.jsx'
// function MyApp(){
//   return(
//     <div>
//       <h1>Hello coder! </h1>
//       </div>
    
    
//   )
// }

// const MyObject = (
//   <a href="'https://google.com">Click me to Visit Google</a>
// )
// const reactElement=React.createElement(
//   'a',
//   {href:'https://avseoul.net/particleEqualizer/', target: '_blank'},
//   'Click me to get magic'
// )
createRoot(document.getElementById('root')).render(
  <App />

)
