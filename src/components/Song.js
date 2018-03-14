import React from 'react'


const Song = ({text,votes,onClick}) => (
  <li className="container w500">
  <div className="row border">
  <div className="col-8 p-3">
  <p className="mb-0">{text}</p>
  </div>
   <div className="col-4 p-2" >
   <span className="mr-3">{votes}</span>
   <button className="btn btn-success mr-3" onClick={onClick} >+</button>
   <button className="btn btn-success" >-</button>
   </div>
  
    
  </div>
  </li>
)


export default Song