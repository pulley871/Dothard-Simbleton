import {BusinessesList} from "./BusinessList.js"
import { getBusinesses } from "./dataAccess.js"
import { StateCodeSearch } from "./stateCodeFilter.js"
import {BusinessTypeOptions} from "./businessTypeFilter.js"
import { AgentsOptions } from "./AgentFilter.js"

export const MainHTML = ()=>{
    return `
        <section>
            ${StateCodeSearch()}<br>
            ${BusinessTypeOptions()}<br>
            ${AgentsOptions()}<br>
            
            
            <button id="reset">Reset Search</button>
            ${BusinessesList(getBusinesses())}
        </section>
    `
}

