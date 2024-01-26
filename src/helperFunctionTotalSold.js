export {bestSellingTv}  from "./constants/inventory.js";

// 1. Maak een functie die de voorraad van een TV object aanpast.

export function calculateSoldTvs(inventory) {
    let totalSold = 0;
    for (let i = 0; i < inventory.length; i++) {
        totalSold += inventory[i].sold;
    }
    return totalSold;
}

