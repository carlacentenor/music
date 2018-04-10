import { connect } from 'react-redux'
 import { increment, decrement,select,showList } from '../actions/actions'
import ListSong from '../components/ListSong'
import axios from 'axios';
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
  getMusic: (data) => {
    axios.get('https://api.spotify.com/v1/albums/3MfNbOJuFb5H4CjrT49oiI/tracks')
    .then((response) => {
        dispatch( showList(response.data) ) 
    }) 
  },

});


const VotesUpdate = connect(mapStateToProps,mapDispatchToProps)(ListSong)

export default VotesUpdate