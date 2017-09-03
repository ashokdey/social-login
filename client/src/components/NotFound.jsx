import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class NotFound extends Component {
  _renderLink(){
    switch(this.props.auth){
      case null: 
        return <h3><Link to="/"> Go to Home </Link></h3>;
      
      case false:
        return <h3><Link to="/"> Go to Home </Link></h3>;

      default:
        return <h3><Link to="/app/dashboard"> Go to Home </Link></h3>;
    }
  }
  
  render(){
    return (
      <div className="container" style={{marginTop: '20vh'}}>
        <p className="center">
          <h1>Sorry page Not found</h1>
          { this._renderLink()}
        </p>
      </div>
    );
  }
}

function mapStateToProps({auth}){
  return {auth};
}

export default connect(mapStateToProps)(NotFound);