import Songs from './reducer-songs'

const initialState = {
  id:0,
  text: 'Canción 0',
   votes: 0
}


const Votes = (state = initialState, action) => {

  switch (action.type){

    case 'INCREMENT' : 
    const song = action.payload;
    const id = song.id;
    const songV = song.votes;
    console.log(id)
    return {...song};
    
    default :
    return state;

  }
}

function incrementSong(id){
  
for(let i=0; i<Songs().length ;i++ ){
  if(id === Songs()[i].id){
  var votesU =Songs()[i].votes;
  votesU++;
  }
  
}
return votesU
}

export default Votes