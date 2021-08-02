import { getAgents } from "./dataAccess.js";
import { Businesses } from "./Business.js";




export const BusinessTypeList = (businessesArr)=>{
    const agents = getAgents();
    
    let htmlString = `<article class="businessesList--manufacturing">
                        <h1>Manufacturing Businesses</h1>`
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