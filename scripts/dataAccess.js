import { database } from "./database.js";

export const fetchAgents = () => {
    return fetch("http://localhost:8088/purchaseAgents") // Fetch from the API
        .then(res => res.json())  // Parse as JSON
        .then(agents => {
            // What should happen when we finally have the array?
            database.purchaseAgents = agents
            
        })
}

export const fetchBusinesses = () => {
    return fetch("http://localhost:8088/businesses") // Fetch from the API
        .then(res => res.json())  // Parse as JSON
        .then( business => {
            // What should happen when we finally have the array?
            database.businesses = business
            
        })
}
export const getAgents = ()=>{
    return database.purchaseAgents.map(agent =>({...agent}))
}
export const getBusinesses = ()=>{
    return database.businesses.map(business =>({...business}))
}