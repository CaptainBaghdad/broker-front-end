import React, { Component } from 'react';

import './App.css';
import LoadContainer from './containers/LoadContainer';
import Nav from './containers/Nav';
import {Route,Link,Switch } from "react-router-dom";
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';


class App extends Component {



  




  render() {
    
    
    
    return (
      <div className="App">
      
      
      
      <Nav />
      <Switch>
     <Route exact path="/" component={LoadContainer} /> 
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={LogIn} />
      
      </Switch>
      
      
      </div>
    );
  }
}



export default App;
