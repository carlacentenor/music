import { connect } from 'react-redux'
import { next , before } from '../actions/actions'
import PreviewSong from '../components/PreviewSong'


function mapStateToProps(state) {

  return {
    listsongs: state.songs,
  }

}

const mapDispatchToProps = (dispatch) => ({
  onNext: (id) => {
    dispatch(next(id))
  },
  onBefore: (id) => {
    dispatch(before(id))
  },

});


const Preview = connect(mapStateToProps,mapDispatchToProps)(PreviewSong)

export default Preview