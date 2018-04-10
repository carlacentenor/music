import React from 'react'
import Song from './Song'


const ListSong = ({listsongs , onIncrement, onDecrement , onSelect,data}) =>{
  console.log(data)


   listsongs.songs.sort(
    function (a, b) {
      if (a.votes > b.votes) {
        return 1;
      }
      if (a.votes < b.votes) {
        return -1;
      }
      return 0;
      }).reverse();

      
  
  return(

  <ul className="p-0">
    {data.map((song,index) =>
      <Song 
         key={song.track_number}
         text = {song.name}
         id = {song.track_number}
        votes = {song.duration_ms}
        track = {song.preview_url}
        // onIncrement = {onIncrement}
        // onDecrement = {onDecrement}
         onSelect = {onSelect}
        // image = {song.image}
        object = {song}
      />
          )}
          
  </ul>
)
}

export default ListSong