import { combineReducers } from 'redux';
import reducerSongs from './reducer-songs';
import votesReducer from './votesReducer'; 


const rootReducer = combineReducers ({
  songs : reducerSongs,
  votes : votesReducer
  
});

export default rootReducer;