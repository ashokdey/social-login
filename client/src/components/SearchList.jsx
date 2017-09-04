import React, {Component} from 'react';
import {connect} from 'react-redux';
// import Preloader from './Preloader';
import SearchItem from './SearchItem';
import * as actions from '../actions';

class SearchList extends Component{

  constructor(props){
    super(props);
    this.state = {
      results: [],
      filteredItems: []
    }
  }

  componentDidUpdate(){
    
  }

  _filter(name, e){
    const isChecked = e.target.checked;
    // console.log(e.target.checked);

    if(isChecked && this.props.search){
      const filterOut = this.props.search.results.filter((item) => item.kind === name);
      console.log(e.target.value);
      this.setState({filteredItems: filterOut});
      this.props.filterResults(filterOut);
    }
  }

  render(){
    // console.log(this.props.search);
    console.log('**Inside Render', this.state.filteredItems);

    if(this.props.search === null){
      return <p>Search anything in the box above !</p>
    }

    let cKey = 0;
    console.log('**Inside Render results', this.props.search.results);
    
    return(
      <div>
        <br/>
        <div className="row">
          <div className="col s12 m8 offset-m1">
            <form>
              <input className="with-gap" value="all" name="filter" id="song" type="radio" onChange={this._filter.bind(this, 'all')}/>
              <label htmlFor="song">All</label>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <input className="with-gap" value="songs" name="filter" id="song" type="radio" onChange={this._filter.bind(this, 'song')}/>
              <label htmlFor="song">Songs</label>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <input className="with-gap" value="feature-movie" name="filter" id="feature-movie" type="radio" onChange={this._filter.bind(this, 'feature-movie')}/>
              <label htmlFor="feature-movie">Feature Movies</label> 
              &nbsp; &nbsp; &nbsp; &nbsp;
              <input className="with-gap" value="postcard" name="filter" id="postcard" type="radio" onChange={this._filter.bind(this, 'postcard')}/>
              <label htmlFor="postcard">Postcards</label>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <input className="with-gap" value="tv-episode" name="filter" id="tv-episode" type="radio" onChange={this._filter.bind(this, 'tv-episode')}/>
              <label htmlFor="tv-episode">TV Episodes</label> 
            </form>
          </div>
        </div>
        <br/>
        <div className="row">
          <br/>
          {
            this.props.search.results.map((item) => {
              return <SearchItem key={++cKey} item={item} />
            })
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps({search}){
  return {search};
}

export default connect(mapStateToProps, actions)(SearchList);