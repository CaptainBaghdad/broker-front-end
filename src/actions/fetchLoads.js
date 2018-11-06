

  export const fetchLoads = () => {
    return (dispatch) => {
      return fetch('http://localhost:3000/api/v1/loads')
      .then(res => res.json())
      .then(allLoads => dispatch({type: 'FETCH_LOADS', payload: allLoads}))
    }
  }

  export function sendData(data) {
    console.log(`this is the data: ${data}`)
    return {type: 'SIGNUP_BTN', payload: data}
  }

  export function handleLogIn(data) {
    return {type: 'LOG_IN', payload: data}

  }