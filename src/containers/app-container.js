import { connect } from 'react-redux'
import { showList } from '../actions/actions'
import App from '../App'
import axios from 'axios';

function mapStateToProps(state) {
  return {
    listsongs: state.songs,
  }

}


const mapDispatchToProps = (dispatch) => ({
  getMusic: (data) => {
    axios({
      method: 'GET',
      url: 'https://api.spotify.com/v1/albums/3MfNbOJuFb5H4CjrT49oiI/tracks',
      headers: {
        'Authorization': 'Bearer BQDwBOKT4xTynnmBkW_crhyCal3XVAttErwwtUpE_nT8_fJoyKA-IXk8gRcYSoxOQ1whQHgQIT8vbbaeEFvxxM5B4EquhnUwsHWo6IwUzEVwYUhR9mha5B3jA02lkoTNQrUuGQOOCStPw4x2KxqID9owLV2GHpXpUrB-dNkmZyRq7ayWmK6TW6cLoNek3d38MWYP7Hu0BPa0upywIY9pV4BqbY9K7JxRf5BItTAobP_LQQ8gTSlD4uY5itDnKqEvwB9AhKBncvPNEl5PM9X1PAGFjAA',
        'Accept': 'application/json'
      },
    }).then((response) => {
      dispatch(showList(response.data.items))
    })

  },
  getAlbum: (text) => {
    axios({
      method: 'GET',
      url: `https://api.spotify.com/v1/search?q=${text}&type=track&market=US&limit=10&offset=5`,
      headers: {
        'Authorization': 'Bearer BQDwBOKT4xTynnmBkW_crhyCal3XVAttErwwtUpE_nT8_fJoyKA-IXk8gRcYSoxOQ1whQHgQIT8vbbaeEFvxxM5B4EquhnUwsHWo6IwUzEVwYUhR9mha5B3jA02lkoTNQrUuGQOOCStPw4x2KxqID9owLV2GHpXpUrB-dNkmZyRq7ayWmK6TW6cLoNek3d38MWYP7Hu0BPa0upywIY9pV4BqbY9K7JxRf5BItTAobP_LQQ8gTSlD4uY5itDnKqEvwB9AhKBncvPNEl5PM9X1PAGFjAA',
        'Accept': 'application/json'
      },
    }).then((response) => {console.log(response.data.tracks.items)
    })

  },

});


const AppGeneral = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppGeneral