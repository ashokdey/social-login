import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './Header.jsx';
import Landing from './Landing.jsx';
import Dashboard from './Dashboard.jsx';
import About from './About.jsx';
import NotFound from './NotFound.jsx'

import * as actions from '../actions';

class App extends React.Component{
  componentDidMount(){
    this.props.fetchUser();
  }

  render(){
    // console.log(this.props.auth);
    return(
      <div>
        <Router>
          <div>
            <Header/>        
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/app/dashboard" component={Dashboard} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
function mapStateToProps({auth}){
  return {auth};
}
export default connect(mapStateToProps, actions)(App);