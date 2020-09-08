import React from 'react';
import {BrowserRouter as Router, Switch, Route /* NavLink*/} from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import HomePage from './components/home'

class App extends React.Component {
  state = {
    
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={HomePage}></Route>
          </Switch>
        </Router>
      </div>
    );
  }  
}

export default App;
