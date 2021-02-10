import {React, useState,useEffect, useRef} from 'react';
import { Dragg } from './Dragg';



const Draggable =()=>{

const[moseDown,setMouseDown]=useState(false)
const dragContainer=useRef()
const dragItem=useRef()

const[left ,setLeft]=useState("0px")
const[top ,setTop]=useState("0px")

const offset=[top.top,left.left]


let mousePosition;



const styleData={
    position:"absolute",
    left:left,
    top:top,
   width:"50px",
 height:"50px",
    //background:'blue',
    color:"white"
}





//TO DO: chek if mouse is within the container, if not stop updating coordinates

function _onMouseDown(e){


    setMouseDown(!moseDown)
 setTop({top: ( dragItem.current.offsetTop - e.clientY)});
   setLeft({left:(dragItem.current.offsetLeft - e.clientX)});
   /* offset = [
        dragItem.current.offsetLeft - e.clientX,
        dragItem.current.offsetTop - e.clientY
    ];*/

}




function _onMouseUp(e){

    setMouseDown(!moseDown)
    
    }
    




function _onMouseMove(e) {
    /*setLeft({left:e.screenX.toString()+'px'});
    setTop({top: e.screenY.toString()+'px'});*/
    e.preventDefault()
    if(moseDown){

        mousePosition = {

            x : e.clientX,
            y : e.clientY

        }
        dragItem.current.style.top=( mousePosition.y + offset[0])+'px'
        dragItem.current.style.left=( mousePosition.x + offset[1])+'px'
        

        //setTop({top: (dragItem.current.offsetTop-e.screenY)});
        //setLeft({left:(dragItem.current.offsetLeft-e.screenX)});
    
      //  dragItem.current.style.left=(e.screenX-offset[1])+'px'
       // dragItem.current.style.top=(e.screenY+offset[1])+'px'
     // console.log("OFFSET",offset[0])
       //console.log("DIVstyle",dragItem.current.style.left)
    
    }
    
   
     

    
   // console.log("top",top)
  
   

}


 

return(


<div className='p-3 bg-success' style={{height:"300px"}}


> 
<div ref={dragContainer} className='bg-white relative' style={{height:"200px"}} 
>

<div ref={dragItem} style={styleData}

onMouseDown={(e)=>{_onMouseDown(e)}}
onMouseMove={(e)=>{_onMouseMove(e)}} 
onMouseUp={(e)=>{_onMouseUp(e)}}

>
    
<img  alt="pepperoni" id="drag1" src="/images/pep.jpg"  className="w-50 h-50"></img>
    </div>

</div>
</div>

)

}



export default Draggable