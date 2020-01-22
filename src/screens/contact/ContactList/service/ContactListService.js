import API from '../../../constant/Api'

export async function Contacts(){
    return await API.get('contact')
    .then((response) => response.data)
}

export async function findPersonById(id){
    return await API.get(`contact/${id}`)
    .then((response) => response.data)
}


// const baseURL = 'https://simple-contact-crud.herokuapp.com/'

// export async function fetchContacts(){
//     const data = await fetch(baseURL + 'contact', {method: 'GET'} )
//     .then((response) => {
//         return response.json()
//     })
//     return data
// }
