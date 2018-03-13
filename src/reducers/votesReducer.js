const initialVotes = {
  votes :0
};

const Votes = (state = initialVotes, action) => {
  switch (action.type){
    case 'INCREMENT' : 
    return { ...state , votes :state.votes+1 } ;
    case 'DECREMENT' : 
    return { ...state , votes :state.votes-1 } ;
    default :
    return state;

  }
}

export default Votes