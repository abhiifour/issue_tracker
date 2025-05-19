import axios from 'axios'


// get repos subscribed by the user 
export async function getLatestNotifications(username:string,lastNotificationId:number):Promise<any>{
  
    const { data }: any = await axios.post("http://localhost:3001/user/notification/new", {
        username: username,
        lastNotificationId:lastNotificationId
    });
    return data;
}

export async function getNotifications(username:string):Promise<any>{
    const {data} = await axios.post("http://localhost:3001/user/notification",{
        username:username,
       
    })

    return data;
}
