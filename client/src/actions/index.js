import axios from 'axios';
import {FETCH_USER, FETCH_RESULTS, FILTER_RESULTS} from './types';

export const fetchUser = () => {
  return function(dispatch){
    axios.get('/api/current_user')
    .then(result => dispatch({type: FETCH_USER, payload: result.data}));
  }
}

export const fetchSongs = (searchWord) => {
  searchWord = searchWord.replace(/ /g, '+');
  return function(dispatch){
    axios.get('https://itunes.apple.com/search?term=' + searchWord)
      .then(result => dispatch({type: FETCH_RESULTS, payload: result.data}));
  }
}

export const filterResults = (filteredArray) => {
  return function(dispatch){
    return dispatch({type: FILTER_RESULTS, payload: filteredArray});
  }
}