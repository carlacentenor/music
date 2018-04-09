import React from 'react'
import Song from './Song'


const ListSong = ({listsongs , onIncrement, onDecrement , onSelect}) =>{

 
   
  


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
    {listsongs.songs.map((song,index) =>
      <Song
        key={song.id}
        text = {song.text}
        id = {song.id}
        votes = {song.votes}
        onIncrement = {onIncrement}
        onDecrement = {onDecrement}
        onSelect = {onSelect}
        image = {song.image}
        object = {song}
      />
    )}
  </ul>
)
}

export default ListSong