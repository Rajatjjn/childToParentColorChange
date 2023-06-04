import React,{useState} from "react";
import "./style.css";
import Callback from "./Callback.js"

export default function App() {
  const[color,setColor]=useState("")

  const getColor=(col)=>{
setColor(col)
  }
  return (
    <div style={{background:color,height:"160px", width:"160px"}}>
   
      <Callback getColor={getColor}/>
    </div>
  );
}
