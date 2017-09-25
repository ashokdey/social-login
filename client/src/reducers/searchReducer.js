import {FETCH_RESULTS, FILTER_RESULTS, EMPTY_FILTER} from '../actions/types';

export default function(state = null, action){
  switch(action.type){

    case FETCH_RESULTS:
      return action.payload || false;

    case FILTER_RESULTS:
      return {
        results : state.results,
        filter: action.payload
      };

    case EMPTY_FILTER:
    //   console.log('**Inside empty filter', state);
      return {
        results : state.results,
        filter: action.payload
      };

    default:
      return state;
  }
}
