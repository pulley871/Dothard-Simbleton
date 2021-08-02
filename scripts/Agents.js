

export const Agents = (businessObject, agentObject) =>{
    return `
        <section class="agents">
            <h2 class="business__name">Agent Name: ${agentObject.firstName} ${agentObject.lastName}</h2>
            <p class="business__agent">Business Name: ${businessObject.businessName}</p>
            <p class="business__address">Address: ${businessObject.phoneNumber}</p>
        </section>
    `
}