import API from '../constant/Api'

export async function Contacts(){
    return await API.get('contact')
    .then((response) => response.data)
}
export async function postContact(data){
    return await API.post('contact', data)
        .then((response) => response.data)
        .catch((error) => console.log(error))
}