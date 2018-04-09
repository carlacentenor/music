import React from 'react'



const Song = ({text,votes,id,image,object ,onIncrement,onDecrement, onSelect}) => (
  <li className="container w500" id={id}  onClick ={ (event) =>{ onSelect(object)}}>
  <div className="row border">
  <div className="col-8 p-3">
  <p className="mb-0">{text}</p>
  </div>
   <div className="col-4 p-2" >
   <span className="mr-3">{votes}</span>
   <button className="btn btn-success mr-3" onClick ={ event =>{ onIncrement(event.target.parentNode.parentNode.parentNode.id)}} >+</button>
   <button className="btn btn-success" onClick ={ event =>{ onDecrement(event.target.parentNode.parentNode.parentNode.id)}} >-</button>
   </div>
  
    
  </div>
  </li>
)


export default Song