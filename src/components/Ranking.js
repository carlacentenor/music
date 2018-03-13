import React, { Component } from 'react';
import PreviewSong from './PreviewSong';
import ListSong from './ListSong';

class Ranking extends Component {
  render() {
    return (
      <div className="Ranking">
      <PreviewSong/>
      <ListSong/>
      </div>
    );
  }
}

export default Ranking;
