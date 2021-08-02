import { getBusinesses, getAgents } from "./dataAccess.js";
import {AgentList } from "./AgentsList.js";
export const AgentsOptions = ()=>{
    let htmlString = `<label for="agents">Agents</label>
                    <select>`
    for (const agent of getAgents()) {
        htmlString += `<option name="agents" value="${agent.id}">${agent.firstName} ${agent.lastName}</option>`

    }
    htmlString += "</select>"
    return htmlString
}


document.addEventListener(
    "change",
    (event) =>{
        const renderedList = document.querySelector(".businessesList")
        const render = (businessArr) =>{
                renderedList.innerHTML = AgentList(businessArr)
        }
            
        let businesses = getBusinesses()
        const eventValue = parseInt(event.target.value)
        for (const agent of getAgents()) {
            if (eventValue === agent.id){
                businesses = businesses.filter(business => business.agentId === agent.id )
                render(businesses)

            }
        }
        
    }
        
)