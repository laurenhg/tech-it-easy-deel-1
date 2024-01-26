import './App.css';
import {calculateSoldTvs} from "./helperFunctionTotalSold.js";
import {calculatePurchasedTvs} from "./helperFunctionTotalPurchased.js";
import { inventory } from "./constants/inventory.js";

function App() {
    const totalSold = calculateSoldTvs(inventory);
 const totalPurchased = calculatePurchasedTvs(inventory);

return (
    <div>
        <h1 className="heading">Tech it easy dashboard</h1>
        <p>sales summary</p>
        <hr/>
        <div className="container">
        <div className="box1" style={{backgroundColor: "green"}}>
            <p> Total TVs sold</p>
            <p>:{totalSold}</p>
        </div>
    </div>
    </div>
);
}

export default App
