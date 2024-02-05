export function calculateRemainingTvs(inventory) {
    let totalRemaining = 0;
    for (let i = 0; i < inventory.length; i++) {
        totalRemaining += inventory[i].originalStock - inventory[i].sold;
    }
    return totalRemaining;
}