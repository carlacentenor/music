import React from 'react'


const PreviewSong = ({ listsongs , onNext ,onBefore }) => {

  return (
    <div className="container h250 border w500 mt-4">{console.log(listsongs)}
    <div className="row">
    <div className="col-2">
    <button  className="btn btn-primary" onClick={()=>{onBefore(listsongs.preview.track_number-1)}} >Preview</button>
    </div>
    <div className="col-8 text-center">
    <img className="image-box" src="images/img0.jpg" alt="" />
      <p>{listsongs.preview.name}</p>
      <audio controls autoPlay src={listsongs.preview.preview_url}></audio>
    </div>
    <div className="col-2">
    <button  className="btn btn-primary" onClick={()=>{onNext(listsongs.preview.track_number+1)}} >Next</button>
    
    </div>
    </div>
    
    
   
    
    
  
    </div>
  )
}


export default PreviewSong