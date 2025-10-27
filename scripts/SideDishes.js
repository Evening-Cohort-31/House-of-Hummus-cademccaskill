import { setSideChoice } from "./TransientState.js"

export const Sides = async () => {
    // Fetch side dishes from the API
    const response = await fetch('http://localhost:8088/sides');
    const sides = await response.json();

    // Listen for when a side dish radio button is selected
    document.addEventListener("change", (event) => {
        if (event.target.name === "side") {
            setSideChoice(parseInt(event.target.value)) // Save the choice
        }
    })

    // Start building the HTML
    let html = '<h2>Sides</h2>';
    
    // Create a radio button for each side dish
    sides.forEach(side => {
        html += `
            <div class="side-option">
                <input 
                    type="radio" 
                    id="side-${side.id}" 
                    name="side" 
                    value="${side.id}" 
                />
                <label for="side-${side.id}">
                    ${side.title} - $${side.price.toFixed(2)}
                </label>
            </div>
        `;
    });

    // Return the complete HTML
    return html;
};