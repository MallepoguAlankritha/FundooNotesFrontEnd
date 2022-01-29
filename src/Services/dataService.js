import axios from 'axios';

const config = {
    headers: {
        "authorization":"Bearer"+ " " +localStorage.getItem("token")    
    }
}

export function noteAdd(obj)
{
    console.log(config)
    let response=axios.post("http://localhost:3000/createNote",obj,config)
    return response;
} 
export function getNote()
{
    console.log(config)
    let response=axios.get("http://localhost:3000/getNote",config)
    return response;
} 
export function deleteNote(id)
{
    let a=id
    console.log(config)
    let response=axios.delete(`http://localhost:3000/deleteNote/${a}`,config)
    return response;
} 