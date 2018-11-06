import React, { Component } from 'react';
import {handleLogIn} from '../actions/fetchLoads';
import {connect} from 'react-redux';


class LogIn extends Component{
    state = {
        name:'',
        email:''
    }

    handleSubmit = (data) => {
        fetch('http://localhost')

    }

     render(){
         const {email,password} = this.state;
        return (
            <div>
                <h2>Log In</h2>
                <form   onSubmit={this.handleSubmit}>
            
            <input type="text" name="email" id="email" onChange={this.handleLogIn} value={email}/>
            <input type="text" name="password" id="password" onChange={this.handleLogIn} value={password} />
           
            <input type="submit" value="Submit" />
  
          </form>
            </div>
        )

     }


}

const mapStateToProps = (state) => {
    return {email: state.email,
    password: state.password
    }

}

const mapDispatchToProps = (dispatach) => {
    return {
        handleLogIn: (data) => dispatch(handleLogIn(data))
       }

}


export default connect(mapStateToProps, mapDispatchToProps) (LogIn);