import React, { useEffect, useRef } from "react";
import classes from "./Drag.module.css";
import { useState } from "react";
import { click } from "@testing-library/user-event/dist/click";

const DragDrop = () => {
  const  traingle = useRef(null)
 
   

const[clicked,setClicked]=  useState(false)

 
useEffect(()=>{
 let box = traingle.current;
   // let box =  document.getElementById('drag')
    box.onmousedown = function(e){
         setClicked(box)
     }


    
},[])
 
document.onmouseup = function(e){
     setClicked(null)
}
document.onmousemove = function(e){
 if(!clicked) return ;
 
    var x = e.pageX;
    var y = e.pageY;

    clicked.style.left = x  + 'px'
    clicked.style.top =  y + 'px'
}
    
 
 
  return (
    <div  >
      <div ref={traingle}    id='drag' className={classes.traingle}  ></div>
    </div>
  );
};
export default DragDrop;
