
export const Businesses = (businessObject, agentObject) =>{
    return `
        <section class="businesses">
            <h2 class="business__name">Business: ${businessObject.businessName}</h2>
            <p class="business__agent">Agent Name: ${agentObject.firstName} ${agentObject.lastName} </p>
            <p class="business__address">Address: ${businessObject.addressStreet}</p>
            <p class="business__address">City/Zip: ${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}</p>
        </section>
    `
}

