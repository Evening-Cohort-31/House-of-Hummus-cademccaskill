export const Sales = async () => {
    // Fetch all purchases from the API
    const sales = await fetch("http://localhost:8088/purchases").then(res => res.json())

    // Start building the HTML
    let html = '<h2>Previous Purchases</h2>'

    // Create a div for each sale showing receipt number and total
    let salesDivs = sales.map(sale => {
        return `
            <div class="sale">
                Receipt #${sale.id} = $${sale.total ? sale.total.toFixed(2) : '0.00'}
            </div>
        `
        // toFixed(2) shows 2 decimal places like $12.50
        // The ? checks if total exists, if not shows $0.00
    })

    // Join all the divs into one string (removes commas between them)
    salesDivs = salesDivs.join("")
    html += salesDivs

    // Return the complete sales HTML
    return html
}