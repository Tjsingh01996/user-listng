import axios from 'axios';

const fetch = axios.create({
    baseURL: 'https://hub.dummyapis.com/'
});

const getUser = async ({ limit = 10, start =1001 }: { limit?:number, start?: number}, callback : Function = ()=>{ }) =>{
    
    fetch.get('/employee', { params:{
        noofRecords: limit,
        idStarts: start,
    }}).then((res)=>{
        const { data } = res 
        callback(data)
    })
}

export {
    getUser
}