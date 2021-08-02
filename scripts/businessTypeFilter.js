import { getBusinesses } from "./dataAccess.js";
import {BusinessTypeList} from "./businessTypeList.js"

export const BusinessTypeOptions = ()=>{
    return `
        <label for="businessType">Industry</label>
        <select>
            <option name="businessType" value"Education">Education</option>
            <option name="businessType" value"Hospitality">Hospitality</option>
            <option name="businessType" value"Agriculture">Agriculture</option>
            <option name="businessType" value"Defense">Defense</option>
            <option name="businessType" value"Energy">Energy</option>
            <option name="businessType" value"Manufacturing">Manufacturing</option>
            <option name="businessType" value"Health-care">Health-care</option>
            <option name="businessType" value"Construction">Construction</option>
            <option name="businessType" value"Information">Information</option>
        </select>
    `
}


document.addEventListener(
    "change",
    (event) =>{
        const renderedList = document.querySelector(".businessesList")
        const render = (businessArr) =>{
                renderedList.innerHTML = BusinessTypeList(businessArr)
        }
            
        let businesses = getBusinesses()
        switch (event.target.value){
            case "Manufacturing":
                businesses = businesses.filter(business => business.industry === event.target.value )
                render(businesses)
                break;
            case "Education":
                businesses = businesses.filter(business => business.industry === event.target.value )
                render(businesses)
                break;
            case "Hospitality":
                businesses = businesses.filter(business => business.industry === event.target.value )
                render(businesses)
                break;
            case "Agriculture":
                businesses = businesses.filter(business => business.industry === event.target.value )
                render(businesses)
                break;
            case "Defense":
                businesses = businesses.filter(business => business.industry === event.target.value )
                render(businesses)
                break;
            case "Energy":
                businesses = businesses.filter(business => business.industry === event.target.value )
                render(businesses)
                break;
            case "Health-care":
                businesses = businesses.filter(business => business.industry === event.target.value )
                render(businesses)
                break;
            case "Construction":
                businesses = businesses.filter(business => business.industry === event.target.value )
                render(businesses)
                break;
            case "Information":
                businesses = businesses.filter(business => business.industry === event.target.value )
                render(businesses)
                break;
            
        }
        
        
    }
        
)