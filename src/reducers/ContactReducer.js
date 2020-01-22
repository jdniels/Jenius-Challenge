const dataContact = {
    fetchContacts: []
}

export default function contactReducer(state = dataContact, action){
    switch (action.type) {
        case 'FETCH_CONTACTS':
            return{
                ...state,fetchContacts: action.payload
            }
        default:
            return {...state}
    }
}