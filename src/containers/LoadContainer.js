import React from 'react';
import Load from '../components/Load';

import { fetchLoads } from '../actions/fetchLoads';

import { connect } from 'react-redux';


class LoadContainer extends React.Component {

  componentDidMount() {
    this.props.fetchLoads()
  }

  render() {
    const singleLoad = this.props.loads.map(load => {
      return <Load key={load.id} load={load} />;
    });
   
    return (
    
      <table className="table table-dark">
      <tbody>
        <tr>
          <th scope="col">
            <h3 className="">
              Pick Up
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Drop Off
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Load Type
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Weight
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Select Load
            </h3>
          </th>
        </tr>

        {this.props.loads.map(ele => {
          return <Load key={ele.id} load={ele}/>
        })}

      </tbody>
    </table>


       
      
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    loads: state.loads
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLoads: () => dispatch(fetchLoads())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoadContainer)