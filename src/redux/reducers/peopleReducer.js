import { createFilter } from "react-native-search-filter";
const KEY_TO_FILTER = ['firstName', 'lastName']

const initialState = {
    data: [],
    keyword: '',
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

        default: return state
    }
}

export default peopleReducer