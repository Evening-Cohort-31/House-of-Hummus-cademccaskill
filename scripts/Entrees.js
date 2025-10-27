import { setEntreeChoice } from "./TransientState.js"

export const Entrees = async () => {
    // Fetch entrees from the API
    const response = await fetch('http://localhost:8088/entrees');
    const entrees = await response.json();

    // Listen for when an entree radio button is selected
    document.addEventListener("change", (event) => {
        if (event.target.name === "entree") {
            setEntreeChoice(parseInt(event.target.value)) // Save the choice
        }
    })

    // Start building the HTML
    let html = '<h2>Base Entree</h2>';
    
    // Create a radio button for each entree
    entrees.forEach(entree => {
        html += `
            <div class="entree-option">
                <input 
                    type="radio" 
                    id="entree-${entree.id}" 
                    name="entree" 
                    value="${entree.id}" 
                />
                <label for="entree-${entree.id}">
                    ${entree.name} - $${entree.price.toFixed(2)}
                </label>
            </div>
        `;
    });

    // Return the complete HTML
    return html;
};