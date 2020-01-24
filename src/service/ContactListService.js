import API from '../constant/Api'

export async function Contacts(){
    return await API.get('contact')
    .then((response) => response.data)
}
export async function postContact(data){
    console.log(data, 'Data API')
    const response = await API.post('contact', data)
        if (response.status === 201) {
            alert(response.data.message)
        }else {
            alert(response.data.message)
        }
}

export async function deleteContact(id){
    const response = await API.delete(`contact/${id}`)
        console.log(response, 'RESPONSE DELETE')
    // .then((response) => alert(response.data.message))
    //     .catch((rep) => console.log(response.data.message) )
}

export async function updateContact(id, data){
    const payload = {
        firstName: data.firstName,
        lastName: data.lastName,
        age: data.age,
        photo: data.photo
    }
    await API.put(`contact/${id}`, payload)
    .then((response) => response.data)
    .catch((error) => console.log(error))
}
