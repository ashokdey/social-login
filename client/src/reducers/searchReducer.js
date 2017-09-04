import {FETCH_RESULTS, FILTER_RESULTS} from '../actions/types';

export default function(state = null, action){
  switch(action.type){
    
    case FETCH_RESULTS: 
      return action.payload || false;

    case FILTER_RESULTS:
      return {results: action.payload};
    
    default: 
      return state;
  }
}