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
        'Authorization': 'Bearer BQAMlwBMERAfJ0GcUtURuAeeK6b69NtrEpzI4YvsVnRv58Qs8El3MI7WX6sZ9-yf2JnMovHzMVGIpVAmi4GAKE-NLGPVowrg-1je_aPOz1AszSFS2EYXhVd4JHBRtyeFbsIB7fMchFZVmybRYvkas9xS8P5bc550BN50pJoL9HJXXNI5Td2KYYq4XI_ZfFxpb5OQ453oCBZP6c0M1PL7n4s-TUehBLXurHdF1M90a3vlcvOy5NnmY05aSKLa-SOQnf2RpcCIhQUGJR7tQOWFPAvQdMU',
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
        'Authorization': 'Bearer BQAMlwBMERAfJ0GcUtURuAeeK6b69NtrEpzI4YvsVnRv58Qs8El3MI7WX6sZ9-yf2JnMovHzMVGIpVAmi4GAKE-NLGPVowrg-1je_aPOz1AszSFS2EYXhVd4JHBRtyeFbsIB7fMchFZVmybRYvkas9xS8P5bc550BN50pJoL9HJXXNI5Td2KYYq4XI_ZfFxpb5OQ453oCBZP6c0M1PL7n4s-TUehBLXurHdF1M90a3vlcvOy5NnmY05aSKLa-SOQnf2RpcCIhQUGJR7tQOWFPAvQdMU',
        'Accept': 'application/json'
      },
    }).then((response) => {console.log(response.data.tracks.items)
    })

  },

});


const AppGeneral = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppGeneral