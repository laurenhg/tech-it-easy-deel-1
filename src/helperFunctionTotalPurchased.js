export {bestSellingTv}  from "./constants/inventory.js";

export function calculatePurchasedTvs(inventory) {
    let totalPurchased = 0;
    for (let i = 0; i < inventory.length; i++) {
        totalPurchased += inventory[i].originalStock;
    }
    return totalPurchased;
}