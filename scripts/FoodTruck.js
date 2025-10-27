import { Entrees } from "./Entrees.js"
import { Vegetables } from "./Vegetables.js"
import { Sides } from "./SideDishes.js"
import { Sales } from "./Sales.js"
import { PurchaseCombo } from "./PurchaseCombo.js"

// Main component - builds the entire page
export const FoodTruck = async () => {
    // Get HTML from each component (await = wait for data to load)
    const entreeHTML = await Entrees();
    const vegetablesHTML = await Vegetables();
    const sidesHTML = await Sides();
    const salesHTML = await Sales();
    const purchaseButtonHTML = PurchaseCombo(); // No await needed
    
    // Return the full page HTML with all sections
    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        
        <article class="choices">
            <section class="entrees">
            ${entreeHTML}
            </section>
            
            <section class="vegetables">
            ${vegetablesHTML}
            </section>
            
            <section class="sides">
            ${sidesHTML}
            </section>
        </article>
        
        ${purchaseButtonHTML}
        
        <article class="sales">
            ${salesHTML}
        </article>
    `;
};