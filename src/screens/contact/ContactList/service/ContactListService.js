const baseURL = 'https://simple-contact-crud.herokuapp.com/'

export async function contact(){
    const data = await fetch('https://simple-contact-crud.herokuapp.com/contact', {method: 'GET'})
    .then((response) =>{
        return response.json()
    })
    .catch((err) => { 
        console.log(err)
    })
    return data;
}

