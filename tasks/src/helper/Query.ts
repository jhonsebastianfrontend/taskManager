import { Task } from "../types";

export async function Query (url:string, method="GET", taskData: Task={
    id: '',
    name: '',
    description: '',
    completedAt: '',
    state: ''
}) {

    let options = {};

    if(method === "GET" || method === "DELETE"){
        options = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    }

    if(method === "POST" || method === "PUT"){
        options = {
            method: method,
            body: JSON.stringify(taskData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
    }
    console.log(url)
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}