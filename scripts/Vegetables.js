import { setVegetableChoice } from "./TransientState.js"

export const Vegetables = async () => {
    // Fetch vegetables from the API
    const response = await fetch('http://localhost:8088/vegetables');
    const vegetables = await response.json();

    // Listen for when a vegetable radio button is selected
    document.addEventListener("change", (event) => {
        if (event.target.name === "vegetable") {
            setVegetableChoice(parseInt(event.target.value)) // Save the choice
        }
    })

    // Start building the HTML
    let html = '<h2>Vegetables</h2>';
    
    // Create a radio button for each vegetable
    vegetables.forEach(vegetable => {
        html += `
            <div class="vegetable-option">
                <input 
                    type="radio" 
                    id="vegetable-${vegetable.id}" 
                    name="vegetable" 
                    value="${vegetable.id}" 
                />
                <label for="vegetable-${vegetable.id}">
                    ${vegetable.type} - $${vegetable.price.toFixed(2)}
                </label>
            </div>
        `;
    });

    // Return the complete HTML
    return html;
};