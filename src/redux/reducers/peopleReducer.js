const initialState = {
    data: [],
    keyword: '',
    formContact: {
        firstName: "",
        lastName: "",
        age: NaN,
        photo: ''
      },
    updateContact:{
        id: '',
        firstName: "",
        lastName: "",
        age: NaN,
        photo: ''
    },  
    isLoading: false
}

const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CONTACT_PENDING':
            return {
                ...state,
                isLoading: false
            }
        case 'GET_CONTACT_FULFILLED':
            return {
                ...state,
                isLoading: true,
                data: action.payload.data
            }
        case 'GET_CONTACT_REJECTED':
            return {
                ...state,
                isLoading: true
            }
        case 'HANDLE_FIRSTNAME':
            return {
                ...state, formContact:{
                    ...state.formContact, firstName: action.payload
                }
            }
        case 'HANDLE_LASTNAME':
            return {
                ...state, formContact:{
                    ...state.formContact, lastName: action.payload
                }
            }
        case 'HANDLE_AGE':
            return {
                ...state, formContact:{
                    ...state.formContact, age: action.payload
                }
            }
        case 'HANDLE_PHOTO':
            return {
                ...state, formContact:{
                    ...state.formContact, photo: action.payload
                }
            }
        case 'HANDLE_UPDATE_ID':
            return {...state, updateContact:{
                ...state.updateContact, id: action.payload
            }
        }
        case 'HANDLE_UPDATE_FIRSTNAME':
            return {...state, updateContact:{
                ...state.updateContact, firstName: action.payload
            }
        }
        case 'HANDLE_UPDATE_LASTNAME':
            return {...state, updateContact:{
                ...state.updateContact, lastName: action.payload
            }
        }
        case 'HANDLE_UPDATE_AGE':
            return {...state, updateContact:{
                ...state.updateContact, age: action.payload
            }
        }
        case 'HANDLE_UPDATE_PHOTO':
            return {...state, updateContact:{
                ...state.updateContact, photo: action.payload
            }
        }
        default: return state
    }
}

export default peopleReducer