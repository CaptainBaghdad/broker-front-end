import React from "react";

//import { connect } from 'react-redux'

const Load = props => {
  // console.log(props);
  
  return (
    
    
    <tr>
        
       <td>{props.load.pick_up}</td>
       <td>{props.load.drop_off}</td>
       <td>{props.load.load_type}</td>
       <td>{props.load.weight}</td>
       <td><button className="btn btn-danger">Select</button></td>
       <hr></hr>
       

      
      </tr>
      
   
  );
};



export default Load;