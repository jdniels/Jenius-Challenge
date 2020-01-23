import Axios from 'axios'

export const contacts = () => ({
    type: "GET_CONTACT",
    payload: Axios.get("https://simple-contact-crud.herokuapp.com/contact")
})