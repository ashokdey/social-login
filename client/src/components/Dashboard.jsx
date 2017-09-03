import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Dashboard extends Component{
  _renderContent(){
    switch(this.props.auth){
      case null: 
      return <Redirect to="/"/>;        
      case false:
        return <Redirect to="/"/>;
      default:
        return this.props.auth.name;
    }
  }
  render(){
    console.log(this.props);
    const {auth} = this.props;

    return(
      <div className="container">
        <h2>Dashboard</h2>
        <p>Welcome {this._renderContent()} !</p>
      </div>
    );
  }
}

function mapStateToProps({auth}){
  return {auth};
}

export default connect(mapStateToProps)(Dashboard);


