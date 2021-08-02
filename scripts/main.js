
import { fetchAgents, fetchBusinesses } from "./dataAccess.js";
import {MainHTML} from "./dothardSimbleton.js"
import "./businessTextSearch.js"
const mainContainer = document.querySelector(".main")

const render = () =>{
    fetchAgents()
    fetchBusinesses().then(() =>{
        mainContainer.innerHTML = MainHTML()
    })
    
}

render()

//reset button on filter options || resets web page to original content
document.addEventListener(
    "click",
    (event) =>{
        if (event.target.id === "reset"){
            render()
        }

    }
)
document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
    
})