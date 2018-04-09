import { connect } from 'react-redux'
 import { increment, decrement,select } from '../actions/actions'
import ListSong from '../components/ListSong'

// import { bindActionCreators } from 'redux'

function mapStateToProps(state) {

  return {
    listsongs: state.songs,
  }

}

const mapDispatchToProps = (dispatch) => ({
  onIncrement: (id) => {
    dispatch(increment(id))
  },
  onDecrement: (id) => {
    dispatch(decrement(id))
  },
  onSelect: (image,title,id) => {
    dispatch(select(image,title,id))
  },
  getMusic: () => {
    
   
     
  },

});


const VotesUpdate = connect(mapStateToProps,mapDispatchToProps)(ListSong)

export default VotesUpdate