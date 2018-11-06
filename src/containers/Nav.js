import React, { Component } from 'react';
import {Link } from "react-router-dom";



class Nav extends Component{
   render(){

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/">Broker-19</Link>
  

  <Link to={`/signup`} className="btn btn-success" >SignUp</Link>
  <Link to={`/login`} className="btn btn-success"> LogIn</Link>
  
</nav>
        </div>
    )
   }

}

export default Nav;