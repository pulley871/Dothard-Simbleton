import { Businesses } from "./Business.js";
import { getBusinesses, getAgents} from "./dataAccess.js";


export const BusinessesList = (businessesArr) =>{
    const agents = getAgents();
    
    let htmlString = `<article class="businessesList">
                        <h1>Actice Businesses</h1>`
    businessesArr.forEach(
        (business) =>{
            for (const agent of agents) {
                if(agent.id === business.agentId){
                    htmlString += Businesses(business, agent)
                }
            }
        }
    )
    htmlString += "</article>"
    return htmlString
}