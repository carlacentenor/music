import { combineReducers } from 'redux';
import reducerSongs from './reducer-songs';
import votesReducer from './votesReducer'; 


const rootReducer = combineReducers ({
  songs : reducerSongs,
  songSelect : votesReducer,
  
});

export default rootReducer;