import {React, useState} from 'react';



export const Dragg=()=> {


  ///<img  alt="pepperoni" id="drag1" src="/images/pep.jpg"  className="w-25"></img>

  const[X ,setX]=useState(0)
  const[Y ,setY]=useState(0)


  function _onMouseMove(e) {
    setX({X:e.screenX});
    setY({Y:e.screenY});
  }

console.log("POSU",X)
  return (
    <div   onMouseMove={(e)=>{_onMouseMove(e)}} className="  relative w-25 shadow-sm bg-white rounded p-3">
      
    <div style={{position: "absolute", top:0}}> fe</div>      
  


    </div>
  );
}