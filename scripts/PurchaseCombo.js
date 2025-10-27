// PurchaseCombo.js - Handles purchase button and creates orders

import { getTransientState, clearTransientState } from "./TransientState.js"

// Function that runs when the purchase button is clicked
const handlePurchaseClick = async (event) => {
    // Get the user's current selections
    const state = getTransientState()
    
    // Make sure all 3 items are selected (entree, vegetable, side)
    if (state.entreeId === 0 || state.vegetableId === 0 || state.sideId === 0) {
        window.alert("Please select an entree, vegetable, and side before purchasing.")
        return // Stop here if not all selected
    }
    
    // Fetch all items from the API to get their prices
    const entrees = await fetch('http://localhost:8088/entrees').then(res => res.json())
    const vegetables = await fetch('http://localhost:8088/vegetables').then(res => res.json())
    const sides = await fetch('http://localhost:8088/sides').then(res => res.json())
    
    // Find the specific items the user selected
    const selectedEntree = entrees.find(e => e.id === state.entreeId)
    const selectedVegetable = vegetables.find(v => v.id === state.vegetableId)
    const selectedSide = sides.find(s => s.id === state.sideId)
    
    // Add up all the prices
    const total = selectedEntree.price + selectedVegetable.price + selectedSide.price
    
    // Create an object with the purchase details
    const purchase = {
        entreeId: state.entreeId,
        vegetableId: state.vegetableId,
        sideId: state.sideId,
        total: total
    }
    
    // Set up the POST request options
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(purchase) // Convert object to JSON string
    }
    
    // Send the purchase to the API and save it
    const response = await fetch("http://localhost:8088/purchases", fetchOptions)
    const savedPurchase = await response.json()
    
    console.log("Purchase saved:", savedPurchase)
    
    // Clear the stored selections
    clearTransientState()
    
    // Uncheck all radio buttons on the page
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.checked = false
    })
    
    // Trigger a re-render to show the new purchase in the sales list
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

// Component that creates the purchase button
export const PurchaseCombo = () => {
    // Listen for clicks on the purchase button
    document.addEventListener("click", (event) => {
        if (event.target.id === "purchase") {
            handlePurchaseClick(event) // Run the purchase function
        }
    })
    
    // Return the button HTML
    return `<button id="purchase">Purchase Combo</button>`
}