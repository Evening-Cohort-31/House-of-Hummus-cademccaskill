import { FoodTruck } from "./FoodTruck.js"

// Get the main container element from the HTML page
const mainContainer = document.querySelector("#container")

// Function that renders the entire app
const renderAllHTML = async () => {
    // Put the FoodTruck HTML inside the container (await = wait for it to load)
    mainContainer.innerHTML = await FoodTruck()
}

// Run the render function when the page first loads
renderAllHTML()

// Listen for "stateChanged" events (when user makes a selection)
// When state changes, re-render the entire app to show updates
document.addEventListener("stateChanged", () => {
    renderAllHTML()
})