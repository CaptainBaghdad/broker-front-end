import React, { Component } from "react";

import {connect} from 'react-redux';
import {sendData} from '../actions/fetchLoads'



class SignUp extends Component{ 
  state = {
    name: "",
    email: "",
    password: "",
    truck_type: ""
  }

  handleFormChange = (e) =>{
    
    this.setState({[e.target.id]: e.target.value })//, ()=> console.log(this.state))

  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
   
     
        fetch('http://localhost:3000/api/v1/drivers', {
        method: 'POST',
        headers:{
            
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            truck_type: this.state.truck_type
  
  
        })
  
    })
    .then(res => res.json())
    .then(data => this.props.sendData(data))
    .then(r => {
      this.setState({name: "", email:"", password: "",truck_type: ""})
    })


    }
    
  
  
 




  

  render(){
    const {name, email,password,truck_type} = this.state
    return (
    
    
      <div>
          <h1>Sign Up</h1>
          <form   onSubmit={this.handleSubmit}>
            <input  type="text" name="name" id="name" onChange={this.handleFormChange} value={name}/>
            <input type="text" name="email" id="email" onChange={this.handleFormChange} value={email}/>
            <input type="text" name="password" id="password" onChange={this.handleFormChange} value={password} />
            <input type="text" name="truck_type" id="truck_type" onChange={this.handleFormChange} value={truck_type}/>
            <input type="submit" value="Submit" />
  
          </form>
      </div>
     
    );


  }



}
  
  


 const mapStateToProps = (state) =>{
   return {
      name: state.name,
      email: state.email,
      password: state.password,
      truck_type: state.truck_type
   }
 }

 const mapDispatchToProps = (dispatch) =>{
   return {
    sendData: (data) => dispatch(sendData(data))
   }
 }


export default connect(mapStateToProps,mapDispatchToProps)(SignUp);