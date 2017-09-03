import React, {Component} from 'react';
import {connect} from 'react-redux';
// import Preloader from './Preloader';

class SearchList extends Component{
  render(){
    // console.log(this.props.search);

    if(this.props.search === null){
      return <p>Search anything in the box above !</p>
    }
    let cKey = 0;
    return(
      <div>
        {
          this.props.search.results.map((item) => {
            return <p key={++cKey}><strong> {item.artistName} </strong></p>
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