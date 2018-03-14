import React from 'react'
import Song from './Song'



const ListSong = ({songs, onIncrement}) => (
  <ul className="p-0">
    {songs.map((song,index) =>
      <Song
        key={song.id}
        onClick = {() => onIncrement(song)}
        {...song}
      />
    )}
  </ul>
)

export default ListSong