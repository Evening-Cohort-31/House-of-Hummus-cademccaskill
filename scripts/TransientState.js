// Object that stores the user's current selections (before they purchase)
const transientState = {
    entreeId: 0,
    vegetableId: 0,
    sideId: 0
}

// Save which entree the user picked
export const setEntreeChoice = (chosenEntree) => {
    transientState.entreeId = chosenEntree
}

// Save which vegetable the user picked
export const setVegetableChoice = (chosenVegetable) => {
    transientState.vegetableId = chosenVegetable
}

// Save which side the user picked
export const setSideChoice = (chosenSide) => {
    transientState.sideId = chosenSide
}

// Get a copy of the current selections
export const getTransientState = () => {
    return { ...transientState } // ... creates a copy so original can't be changed
}

// Reset all selections back to 0 (used after purchase)
export const clearTransientState = () => {
    transientState.entreeId = 0
    transientState.vegetableId = 0
    transientState.sideId = 0
}