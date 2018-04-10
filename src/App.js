import React, {Component} from 'react';
import Ranking from './components/Ranking'

import './App.css';


class App extends Component {

  componentWillMount() {
    this.props.getMusic()

  }


  render(){
  return(
  <div>
    <Ranking data={this.props.listsongs.data}  />
  </div>
  ) 
}
}

export default App