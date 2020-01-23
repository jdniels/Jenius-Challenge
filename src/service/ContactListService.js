import API from '../constant/Api'

export async function Contacts(){
    return await API.get('contact')
    .then((response) => response.data)
}
export async function postContact(data){
    console.log(data, 'Data API')
    return await API.post('contact', data)
        .then((response) => response.data)
        .catch((error) => console.log(error))
}

export async function deleteContact(id){

    return await API.delete(`contact/${id}`)
    .then((response) => alert(response.data.message))
        .catch((error) => console.log(error.message) )
}

export async function updateContact(id){
    const payload = {
        firstName: '',
        lastName: '',
        age: '',
        photo: ''
    }
    await API.put(`contact/${id}`, payload)
    .then((response) => response.data)
}
