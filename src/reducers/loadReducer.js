const initialState = {
  loads: [],
  drivers: [],
  selectedLoad: {},
  selectedDriver: {}
}



const loadReducer = (state = initialState, action) => {
  console.log(state, action );

  switch (action.type) {

    case ('FETCH_LOADS'): {
      return {...state, loads: action.payload}
    }

    default:
      return state
  }
    }


    export default loadReducer;
