import { connect } from 'react-redux'
import {increment, decrement} from '../actions/actions'
import ListSong from '../components/ListSong' 
import {bindActionCreators} from 'redux'

function mapStateToProps(state) {
  console.log(state);
  return {
    songs : state.songs,
    song:state.songSelect,
  
    
  }

}
function mapDispatchToProps(dispatch){
 
 return bindActionCreators({onIncrement : increment},dispatch)
  
}

const VotesUpdate = connect(mapStateToProps, mapDispatchToProps)(ListSong)

export default VotesUpdate