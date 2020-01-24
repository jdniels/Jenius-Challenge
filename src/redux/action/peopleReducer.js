import Axios from 'axios'

export const contacts = () => ({
    type: "GET_CONTACT",
    payload: Axios.get("https://simple-contact-crud.herokuapp.com/contact")
})

export const deleteContact = () => ({
    type: "DELETE_CONTACT",
    payload : Axios.delete(`https://simple-contact-crud.herokuapp.com/contact/${id}`)
})