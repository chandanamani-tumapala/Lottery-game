import './App.css'
import { useState } from "react";
import Lottery from "./lottery";
import {sum} from "./helper";
function App() {
  let winCondition= (ticket) => {
    return sum(ticket) ===15;
  }
  return (
    <>
      <Lottery n={3} winCondition={winCondition}/>
    </>
  )
}

export default App
