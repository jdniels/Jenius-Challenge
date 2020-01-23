import { createFilter } from "react-native-search-filter";
const KEY_TO_FILTER = ['firstName', 'lastName']

const initialState = {
    data: [],
    keyword: '',
    formContact: {
        firstName: "",
        lastName: "",
        age: null,
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
                    ...state.formContact, firstName: payload
                }
            }
        case 'HANDLE_LASTNAME':
            return {
                ...state, formContact:{
                    ...state.formContact, lastName: payload
                }
            }
        case 'HANDLE_AGE':
            return {
                ...state, formContact:{
                    ...state.formContact, age: payload
                }
            }
        case 'HANDLE_PHOTO':
            return {
                ...state, formContact:{
                    ...state.formContact, photo: payload
                }
            }
        default: return state
    }
}

export default peopleReducer