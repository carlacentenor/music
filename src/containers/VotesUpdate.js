import { connect } from 'react-redux'
import {increment, decrement} from '../actions/actions'
import Song from '../components/Song' 


function mapStateToProps(state) {
  return {
    votes:state.votes
    
  }

}
function mapDispatchToProps(dispatch){
 return {

  onIncrement: () => {
    dispatch(increment);
  },
 }
}

const VotesUpdate = connect(mapStateToProps, mapDispatchToProps)(Song)

export default VotesUpdate