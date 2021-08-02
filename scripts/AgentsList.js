import { getAgents } from "./dataAccess.js";
import { Agents } from "./Agents.js";


export const AgentList = (businessesArr) =>{
    const agents = getAgents();
    
    let htmlString = `<article class="businessesList">
                        <h1>Actice Businesses</h1>`
    businessesArr.forEach(
        (business) =>{
            for (const agent of agents) {
                if(agent.id === business.agentId){
                    htmlString += Agents(business, agent)
                }
            }
        }
    )
    htmlString += "</article>"
    return htmlString
}