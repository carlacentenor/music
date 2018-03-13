import React from 'react'
import Song from '../components/Song'

const songs = [
  {id:1,text: 'Canción A', votes: 35 },
  {id:2,text: 'Canción B', votes: 25 },
  {id:3,text: 'Canción C', votes: 20 },
  {id:4,text: 'Canción D', votes: 17 },
  {id:5,text: 'Canción E', votes: 10 },
]

const ListSong = () => (
  <ul className="p-0">
    {songs.map((song,index) =>
      <Song
        key={song.id}
        {...song}
      />
    )}
  </ul>
)

export default ListSong