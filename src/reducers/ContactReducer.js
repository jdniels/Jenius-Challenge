  export default function peopleReducer(state = {data: [], loading: false, error: null}, action) {
    switch (action.type) {
      case "FETCH_CONTACT":
        return { ...state, 
            loading: true, 
            data: [], 
            error: null 
        };
      case "FETCH_CONTACT_SUCCESS":
        return { ...state, 
            data: action.data.data, 
            loading:false 
        };
        case "FETCH_CONTACT_ERROR" : 
        return {...state, 
            loading: false, 
            error: action.error, 
            data: []
        }
      default:
        return state;
    }
  }