import React, {Component} from 'react';
import {BrowserRouter as Router, Route,Switch, withRouter } from 'react-router-dom';
import NavBarC from './components/navbar';
import Home from './components/home'
import About from './components/about'
import Pricing from './components/pricing'

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render(){
    return (
      <Router>
      <div>
        <Route exact path="/" component = {Home}/>
        <Route path="/about" component = {About} />
        <Route path="/pricing" component = {Pricing} />
      </div>
      </Router>
    );
  }
}


export default App;
