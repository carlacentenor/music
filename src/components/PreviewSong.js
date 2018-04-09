import React from 'react'


const PreviewSong = ({ listsongs , onNext ,onBefore }) => {
console.log(listsongs)

  return (
    <div className="container h250 border w500 mt-4">
    <div className="row">
    <div className="col-2">
    <button  className="btn btn-primary" onClick={()=>{onBefore(listsongs.preview.id-1)}} >Preview</button>
    </div>
    <div className="col-8 text-center">
    <img className="image-box" src={listsongs.preview.image} alt="" />
      <p>{listsongs.preview.text}</p>
    </div>
    <div className="col-2">
    <button  className="btn btn-primary" onClick={()=>{onNext(listsongs.preview.id+1)}} >Next</button>
    
    </div>
    </div>
    
    
   
    
    
  
    </div>
  )
}


export default PreviewSong