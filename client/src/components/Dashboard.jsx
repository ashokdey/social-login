import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import * as actions from '../actions';
import Preloader from './Preloader';
import SearchList from './SearchList';

class Dashboard extends Component{
  _renderName(){
    switch(this.props.auth){
      case null: 
      return <Redirect to="/"/>;        
      case false:
        return <Redirect to="/"/>;
      default:
        return (
        <div className="chip">
          <img src={this.props.auth.photo} alt="User"/>
          {'Welcome, ' + this.props.auth.name}
        </div>) 
        
    }
  }

  _renderSearch(){
    switch(this.props.search){
      case null:
        return <Preloader/>
      case false:
        return 'No result found';
      default: 
        return;
    }
  }

  _handleOnchange(e){
    e.preventDefault();
    // const searchWord = this.refs.search.value;
    const searchWord = e.target.value;
    this.props.fetchSongs(searchWord);
    // this.refs.search.value = '';
  } 

  render(){
    // console.log(this.props);
    return(
      <div className="container">
        <br/>
        {this._renderName()}
        <br/>
      
        <input ref="search" type="text" placeholder="Seach iTunes..." onChange={this._handleOnchange.bind(this)}/>          
        
        <SearchList/>
        <br/>
      </div>
    );
  }
}

function mapStateToProps({auth, search}){
  return {auth, search};
}

export default connect(mapStateToProps, actions)(Dashboard);


