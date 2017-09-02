import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './Header.jsx';
import * as actions from '../actions';
 
const Dashboard = () => <h1> Dashboard </h1>;
const Song = () => <h1> Song </h1>;
const Landing = () => <h1> Landing </h1>;

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
            <Route exact path="/dashboard" component={Dashboard} />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, actions)(App);