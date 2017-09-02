import React, {Component} from 'react';
import {connect} from 'react-redux';

class Header extends Component{

  renderContent(){
    switch(this.props.auth){
      case null: 
        return 'Waiting'
      case false:
        return 'Welcome'
      default:
        return 'Hello'
    }
  }

  render(){
    // see the state as a prop
    // console.log(this.props);
    return(
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo" style={{marginLeft: '10px'}}>ReactTunes</a>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            {this.renderContent()}
            <li><a href="sass.html">Login with Google</a></li>
            <li><a href="badges.html">Login  with Facebook</a></li>
            <li><a href="collapsible.html">About</a></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><a href="collapsible.html">About</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({auth}){
  // param is like state.auth written as {auth} using desctructuring
  return {auth} // similar to auth: auth
}

export default connect(mapStateToProps)(Header);