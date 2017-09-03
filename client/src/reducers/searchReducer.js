import {FETCH_SONGS} from '../actions/types';

export default function(state = null, action){
  switch(action.type){
    
    case FETCH_SONGS: 
      return action.payload || false;
    
    default: 
      return state;
  }
}