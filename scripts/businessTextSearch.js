import { getBusinesses } from "./dataAccess.js";
import { getAgents } from "./dataAccess.js";
export const FoundBusinessDetailed = (businessObject, agentObject)=>{
    return `
        <section class="businesses__found">
            <h2 class="business__name">Business: ${businessObject.businessName}</h2>
            <p class="business__agent">Agent Name: ${agentObject.firstName} ${agentObject.lastName} </p>
            <p class="business__address">Address: ${businessObject.addressStreet}</p>
            <p class="business__address">City/Zip: ${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}</p>
            <p class="business__orders"> <ul><strong>Orders</strong>${businessObject.orders.map((order) => `<li>${order}</li>`).join("")}</ul>
        </section>
    `
}

export const FoundBusiness = (businessesArr)=>{
    const agents = getAgents();
    
    let htmlString = ``
    businessesArr.forEach(
        (business) =>{
            for (const agent of agents) {
                if(agent.id === business.agentId){
                    htmlString += FoundBusinessDetailed(business, agent)
                }
            }
        }
    )
    
    return htmlString
}



document
    .querySelector("#companySearch")
        .addEventListener(
            "keypress",
            keyPressEvent => {
                if (keyPressEvent.charCode === 13) {
                    const companySearchResultArticle = document.querySelector(".businessesList")
                    /*
                        When the user presses 'Enter', find the matching business.

                        You can use the `.includes()` string method to
                        see if a smaller string is part of a larger string.

                        Example: business.companyName.includes(keyPressEvent.target.value)
                    */

                    const foundBusiness = getBusinesses().filter((business) => {return business.businessName.startsWith(keyPressEvent.target.value)})/** implement .find() method here */

                    companySearchResultArticle.innerHTML = FoundBusiness(foundBusiness);
                }
        });
