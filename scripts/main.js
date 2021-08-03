
import { fetchAgents, fetchBusinesses } from "./dataAccess.js";
import {MainHTML} from "./dothardSimbleton.js"
import { NavBar } from "./NavBar.js";
import "./businessTextSearch.js"
const mainContainer = document.querySelector(".main")
const headerContainer = document.querySelector("#header")
const render = () =>{
    fetchAgents()
    fetchBusinesses().then(() =>{
        headerContainer.innerHTML = NavBar();
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