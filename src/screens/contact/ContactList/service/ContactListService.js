import API from '../../../constant/Api'

export async function Contacts(){
    return await API.get('contact')
    .then((response) => response.data)
}
