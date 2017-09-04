import React, {Component} from 'react';
import {connect} from 'react-redux';
// import Preloader from './Preloader';
import SearchItem from './SearchItem';

class SearchList extends Component{

  constructor(props){
    super(props);
    this.state = {
      results: [],
      filteredItems: []
    }
  }

  componentDidUpdate(){
    switch(this.props.search){
      case null:
        return;
      case false:
        return;
      default:
        // thi
        return;
    }
  }

  _filter(name, e){
    const isChecked = e.target.checked;
    // console.log(e.target.checked);

    if(isChecked){
      const filterOut = this.props.search.results.filter((item) => item.kind === name);
      this.setState({filteredItems: filterOut});
    }
  }

  render(){
    // console.log(this.props.search);
    console.log(this.state.filteredItems);

    if(this.props.search === null){
      return <p>Search anything in the box above !</p>
    }
    let cKey = 0;
    return(
      <div>
        <br/>
        <div className="row">
          <div className="col s12 m8 offset-m1">
            <form>
              <input className="with-gap" name="filter" id="song" type="radio" onChange={this._filter.bind(this, 'song')}/>
              <label htmlFor="song">Songs</label>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <input className="with-gap" name="filter" id="feature-movie" type="radio" onChange={this._filter.bind(this, 'feature-movie')}/>
              <label htmlFor="feature-movie">Feature Movie</label> 
              &nbsp; &nbsp; &nbsp; &nbsp;
              <input className="with-gap" name="filter" id="postcard" type="radio" onChange={this._filter.bind(this, 'postcard')}/>
              <label htmlFor="postcard">Postcard</label>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <input className="with-gap" name="filter" id="tv-episode" type="radio" onChange={this._filter.bind(this, 'tv-episode')}/>
              <label htmlFor="tv-episode">TV Episode</label> 
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

export default connect(mapStateToProps)(SearchList);