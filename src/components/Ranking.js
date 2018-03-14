import React, { Component } from 'react';
import PreviewSong from './PreviewSong';
import ListSong from '../containers/Song-container';

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
