import React, {Component} from 'react';
import {connect} from 'react-redux';
// import Preloader from './Preloader';
import SearchItem from './SearchItem';

class SearchList extends Component{
  render(){
    // console.log(this.props.search);

    if(this.props.search === null){
      return <p>Search anything in the box above !</p>
    }
    let cKey = 0;
    return(
      <div className="row">
        {
          this.props.search.results.map((item) => {
            return <SearchItem key={++cKey} item={item} />
          })
        }
      </div>
    )
  }
}

function mapStateToProps({search}){
  return {search};
}

export default connect(mapStateToProps)(SearchList);