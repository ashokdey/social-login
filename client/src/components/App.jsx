import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './Header.jsx';
import Landing from './Landing.jsx';
import * as actions from '../actions';
 
const Dashboard = () => <h1> Dashboard </h1>;

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
            <Route exact path="/app/dashboard" component={Dashboard} />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, actions)(App);