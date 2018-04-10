import React from 'react'


const PreviewSong = ({ listsongs , onNext ,onBefore }) => {

  return (
    <div className="container preview h250  w500 mt-4">
    <div className="row">
    <div className="col-2 d-flex align-items-center">
    <button  className="btn btn-song " onClick={()=>{onBefore(listsongs.preview.track_number-1)}} ><span className="fas fa-chevron-left"></span></button>
    </div>
    <div className="col-8 text-center">
    <img className="image-box" src="images/img0.jpg" alt="" />
      <p>{listsongs.preview.name}</p>
      <audio controls autoPlay src={listsongs.preview.preview_url}></audio>
    </div>
    <div className="col-2 d-flex align-items-center">
    <button  className="btn btn-song" onClick={()=>{onNext(listsongs.preview.track_number+1)}} ><span className="fas fa-chevron-right"></span></button>
    
    </div>
    </div>
    
    
   
    
    
  
    </div>
  )
}


export default PreviewSong