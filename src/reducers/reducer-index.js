import { combineReducers } from 'redux';
import reducerSongs from './reducer-songs';



const rootReducer = combineReducers ({
  songs : reducerSongs,
 

  
});

export default rootReducer;