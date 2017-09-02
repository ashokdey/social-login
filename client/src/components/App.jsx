import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './Header.jsx';
import Landing from './Landing.jsx';
import Dashboard from './Dashboard.jsx';
import About from './About.jsx';

import * as actions from '../actions';

class App extends React.Component{
  componentDidMount(){
    this.props.fetchUser();
  }

  render(){
    return(
      <div>
        <Router>
          <div>
            <Header/>        
            <Route exact path="/" component={Landing}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/app/dashboard" component={Dashboard} />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, actions)(App);