import React, { Component } from 'react';



class Nav extends Component{
   render(){

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Broker-19</a>
  

  <button className="btn btn-success" >SignUp</button>
  <button className="btn btn-success"> LogIn</button>
  
</nav>
        </div>
    )
   }

}

export default Nav;