import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import * as actions from '../actions';
import Preloader from './Preloader';

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

  _handleSubmit(e){
    e.preventDefault();
    const searchWord = this.refs.search.value;
    this.props.fetchSongs(searchWord);
    this.refs.search.value = '';
  } 

  render(){
    console.log(this.props);
    const {auth} = this.props;

    return(
      <div className="container">
        <br/>
        {this._renderName()}
        <br/>
        <form className="center" onSubmit={this._handleSubmit.bind(this)}>
          <input ref="search" type="text" placeholder="Seach iTunes..."/>          
        </form>
        <br/>
      </div>
    );
  }
}

function mapStateToProps({auth, search}){
  return {auth, search};
}

export default connect(mapStateToProps, actions)(Dashboard);


