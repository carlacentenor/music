import { connect } from 'react-redux'
 import {showList } from '../actions/actions'
import App from '../App'
import axios from 'axios';

function mapStateToProps(state) {
  return {
    listsongs: state.songs,
  }

}


const mapDispatchToProps = (dispatch) => ({
  
  getMusic: (data) => {
    axios.get('https://api.spotify.com/v1/albums/3MfNbOJuFb5H4CjrT49oiI/tracks')
    .then((response) => {
        dispatch( showList(response.data.items) ) 
    }) 
  },

});


const AppGeneral = connect(mapStateToProps,mapDispatchToProps)(App)

export default AppGeneral