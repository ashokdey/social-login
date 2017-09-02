import React, {Component} from 'react';

class Header extends Component{
  render(){
    return(
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo" style={{marginLeft: '10px'}}>ReactTunes</a>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="sass.html">Login with Google</a></li>
            <li><a href="badges.html">Login  with Facebook</a></li>
            <li><a href="collapsible.html">About</a></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><a href="sass.html">Login with Google</a></li>
            <li><a href="badges.html">Login  with Facebook</a></li>
            <li><a href="collapsible.html">About</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;