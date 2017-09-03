import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import Preloader from './Preloader';
import LoginTab from './LoginTab';

class Landing extends Component{
  _renderContent(){
    switch(this.props.auth){
      case null: 
        return <Preloader/>
      
      case false:
        return <LoginTab/>
      
      default: 
        // return <h2>Welcome {this.props.auth.name}</h2>
        return <Redirect to="/app/dashboard"/>
    }
  }

  render(){
   
    
    return(
      <div className="container" style={{marginTop:'15vh'}}>
        <div className="row center">
          <div className="col s6 offset-s3">
            <h2>React Tunes</h2>
            <p>Listen to your iTunes music</p>
          </div> 
        </div>
        {this._renderContent()}
      </div>
    );
  }
}

function mapStateToProps({auth}){
  // param is like state.auth written as {auth} using desctructuring
  return {auth} // similar to auth: auth
}


export default connect(mapStateToProps)(Landing);