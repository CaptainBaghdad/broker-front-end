const initialState = {
  loads: [],
  drivers: [],
  selectedLoad: {},
  selectedDriver: {},
  name: "",
  email:"",
  password:"",
  truck_type: ""
}



const loadReducer = (state = initialState, action) => {
  console.log(state, action );

  switch (action.type) {

    case ('FETCH_LOADS'): {
      return {...state, loads: action.payload}
    }

    case ('SIGNUP_BTN'): {
      console.log(`this is the : ${action}`)
      
      return {
        ...state, 
        drivers: [...state.drivers, action.payload]

      }

    }

   

    default:
      return state
  }
    }


    export default loadReducer;
