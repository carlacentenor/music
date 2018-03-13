import { connect } from 'react-redux'
import {increment, decrement} from '../actions/actions'
import Song from '../components/Song' 
import {bindActionCreators} from 'redux'

function mapStateToProps(state) {
  return {
    votes:state.votes
    
  }

}
function mapDispatchToProps(dispatch){
 return bindActionCreators({onIncrement : increment},dispatch)
  
}

const VotesUpdate = connect(mapStateToProps, mapDispatchToProps)(Song)

export default VotesUpdate