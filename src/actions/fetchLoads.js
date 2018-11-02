

  export const fetchLoads = () => {
    return (dispatch) => {
      return fetch('http://localhost:3000/api/v1/loads')
      .then(res => res.json())
      .then(allLoads => dispatch({type: 'FETCH_LOADS', payload: allLoads}))
    }
  }