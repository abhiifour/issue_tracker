import axios from 'axios'

export async function login(username:string,email:string,image:string){
    const {data} = await axios.post("http://localhost:3001/login",{
        username:username,
        email:email,
        image:image
    })
    return data;
}

export async function deleteUser(username:string){
    const {data} = await axios.post('http://localhost:3001/user/delete',{
        username:username
    })
}