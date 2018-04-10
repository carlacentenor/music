import React, {Component} from 'react';
import Ranking from './components/Ranking'

import './App.css';


class App extends Component {

  componentWillMount() {
    this.props.getMusic();
    

  }


  render(){
  return(
  <div className="container" >
  <div className="text-center">
  <input className="form-control inline w300 m-3" placeholder="example:Shakira"  type="text"/>
  <button className="btn btn-primary" onClick={this.props.getAlbum()} >Search</button>
  </div>
   
    <Ranking data={this.props.listsongs.data}  />
  </div>
  ) 
}
}

export default App