import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj={
    username:"suraj singh",
    age:24
  }
  let newArr=[1,2,3,4,5]
  return (
    <>
    <Card channel="Chai aur Code" btnText="Visit Me" />
    <Card channel="Suraj Singh" btnText="Click Me"/>
      <Card/>
    </>
  );
}

export default App;
