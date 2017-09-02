import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './Header.jsx';
 
const Dashboard = () => <h1> Dashboard </h1>;
const Song = () => <h1> Song </h1>;
const Landing = () => <h1> Landing </h1>;

const App = () => {
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

export default App;