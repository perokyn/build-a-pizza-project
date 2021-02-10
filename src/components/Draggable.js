import {React, useState,useEffect, useRef} from 'react';
import { Dragg } from './Dragg';



const Draggable =()=>{

const[moseDown,setMouseDown]=useState(false)
const dragItem=useRef()
const offset=[0,0]
const[left ,setLeft]=useState("0px")
const[top ,setTop]=useState("0px")


useEffect(()=>{

})

const styleData={
    position:"absolute",
    left:left,
    top:top,
    width:"100px",
    height:"100px",
    background:'blue',
    color:"white"
}


function handleDragStart(e){


    setMouseDown(!moseDown)


}




function handleDragEnd(e){


    setMouseDown(!moseDown)
    
    
    }
    




function _onMouseMove(e) {
    /*setLeft({left:e.screenX.toString()+'px'});
    setTop({top: e.screenY.toString()+'px'});*/
    if(moseDown){
        dragItem.current.style.left=(e.screenX+offset[0])+'px'
        dragItem.current.style.top=(e.screenY+offset[0])+'px'
    
    }
    setLeft({left:(e.screenX+offset[0])+'px'});
    setTop({top: (e.screenY+offset[0])+'px'});

    
   // console.log("top",top)
   // console.log("StyleData",styleData.left)
   // console.log("DIVstyle",dragItem.current.style.left)

}


 

return(



<div className='bg-white relative' style={{height:"200px"}} onMouseMove={(e)=>{_onMouseMove(e)}} 
onMouseDown={(e)=>{handleDragStart(e)}}
onMouseUp={(e)=>{handleDragEnd()}}>
dew
<div ref={dragItem} style={styleData}>hello</div>

</div>


)

}



export default Draggable