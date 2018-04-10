
  const SONG = [
    {id:1,text: 'Canción A', votes: 34, image : 'images/img1.jpg'  },
    {id:2,text: 'Canción B', votes: 32, image: 'images/img2.jpg' },
    {id:3,text: 'Canción C', votes: 22, image: 'images/img3.jpg'},
    {id:4,text: 'Canción D', votes: 21, image : 'images/img4.jpg'},
    {id:5,text: 'Canción E', votes: 15, image : 'images/img5.jpg'},
  ];



  const initialState = {
    data : [],
      songs : SONG,
      preview: {id:0,track_number:0 ,text:'music', votes:0 , image: 'images/img0.jpg'},
      songId : 0,
      next : {id:1,text: 'Canción A', votes: 34, image : 'images/img1.jpg' }

  }

  const songReducer = (state = initialState, action) => {
    console.log(action.type);
    
    switch (action.type) {
      case 'SHOW_LIST':
      return {...state , data: action.payload};

      case 'INCREMENT':
        return { ...state, songs:state.songs.map(song =>{
          if(song.id === parseInt(action.payload,10)){
            song.votes++;
          }
          return song; 
        })   };
        case 'DECREMENT':
        return { ...state, songs:state.songs.map(song =>{
          if(song.id === parseInt(action.payload,10)){
            song.votes--;
          }
          
          return song; 
        })   };

        case 'SELECT':
        return { ...state,preview:action.payload   };

        case 'NEXT':
        return { ...state ,preview: function(){ for(let i=0 ; i<state.data.length ;i++){
          if(state.data[i].track_number === action.payload){
            return state.data[i]
          }
          else if(state.data[i].track_number>=state.data.length){
            return state.data[0]
          }
         
        }}()  };
        
        case 'BEFORE':
        return { ...state ,preview: function(){ for(let i=0 ; i<state.data.length ;i++){
          if(state.data[i].track_number === action.payload){
            return state.data[i]
          }
          else if(action.payload<=0){
            return state.data[state.data.length-1]
          }
         
        }}()  };
      default : return  state
    }



  }


export default songReducer