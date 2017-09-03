import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends Component{

  _renderContent(){
    switch(this.props.auth){
      case null: 
        return
      case false:
        return ''
      default:
        return <a href="/api/logout">Logout</a>;
    }
  }

  render(){
    // see the state as a prop
    // console.log(this.props);
    return(
      <nav>
        <div className="nav-wrapper">
          <Link 
            to={(this.props.auth) ? '/app/dashboard': '/'} 
            className="brand-logo" 
            style={{marginLeft: '10px'}}>
              ReactTunes
          </Link>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/about">About</Link></li>
            <li>{this._renderContent()}</li>            
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><Link to="/about">About</Link></li>
            <li>{this._renderContent()}</li>            
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