import React from 'react';
import PreviewSong from '../containers/preview-container';
import ListSong from '../containers/Song-container';

const Ranking =({data})=> {

    return (
      <div className="Ranking">
      <PreviewSong/>
      <ListSong data={data} />

      </div>
    );
  
}

export default Ranking;
