import React,{useState} from "react";
import "./style.css";

export default function Callback({getColor}) {
  const[value,setvalue]=useState()

  function setter(e){
setvalue(e.target.value)
getColor(e.target.value)
  }
  return (

      <input type="text" value={value} onChange={setter}/>
      
 
  );
}