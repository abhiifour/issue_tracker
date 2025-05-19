import axios from 'axios'


// get repos subscribed by the user 
export async function getRepositories(username:string):Promise<any>{
  
    const { data }: any = await axios.post("http://localhost:3001/repos", {
        username: username
    });
    return data;
}

export async function createRepository(name:string,owner:string):Promise<any>{
    const {data} = await axios.post("http://localhost:3001/repo/create",{
        name:name,
        owner:owner
    })
    return data;
}


export async function subscribeRepository(username:string, name:string, owner:string):Promise<any>{
    const {data} = await axios.post("http://localhost:3001/repo/subscribe",{
        username:username,
        name:name,
        owner:owner
    })
    return data;
}

export async function unsubscribeRepository(username:string,name:string, owner:string):Promise<any>{
    const {data} = await axios.post("http://localhost:3001/repo/unsubscribe",{
        username:username,
        name:name,
        owner:owner
    })
    return data;
}