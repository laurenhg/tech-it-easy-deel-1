import './App.css';
import ImageWrapper from "./imageWrapper.js";
import { getTvName} from "./helpers/tvNameHelper.js";
import { getTvPrice} from "./helpers/tvPrice Helper.js";
import {getScreenSize} from "./helpers/tvScreensHelper.js";
import {bestSellingTv, calculateSoldTvs} from "./helpers/helperFunctionTotalSold.js";
import {calculatePurchasedTvs} from "./helpers/helperFunctionTotalPurchased.js";
import {calculateRemainingTvs} from "./helpers/helperFuntionTotalRemaining.js";
import { inventory } from "./constants/inventory.js";

function App() {
    const totalSold = calculateSoldTvs(inventory);
    const totalPurchased = calculatePurchasedTvs(inventory);

    return (
        <>
        <div>
            <div className="heading-container">
            <h1 className="heading">Tech it easy dashboard</h1>
            <h2 className ="sales-summary"> sales summary</h2>
            </div>

            <div className="inner-container">
                <article className="box1" style={{backgroundColor: "lightgreen"}}>
                        <p> Total TVs sold</p>
                        <p>{totalSold}</p>
                </article>
                <article className= "box2" style={{backgroundColor: "lightblue"}}>
                        <p>Total TVs Purchased</p>
                        <p>{totalPurchased}</p>

                </article>
<article className="box3" style={{backgroundColor: "lightpink"}}>
                        <p>Total TVs Remaining</p>
                        <p>{calculateRemainingTvs(inventory)}</p>

</article>
            </div>
        </div>

                <div className="heading-container">
                    <h1 className="heading">Best Seller</h1>
                </div>
            <div className="outer-container">
<div className="image-container">
<ImageWrapper/>
            </div>
                {/*<div className="inner-container-2">*/}

                    <div className="text-container">
                        <h2>{getTvName(bestSellingTv)}</h2>
                        <h1>{getTvPrice(bestSellingTv)}</h1>
                        <h2>{getScreenSize(inventory[0])}</h2>
                    </div>
                </div>

        </>
    );
}

export default App
