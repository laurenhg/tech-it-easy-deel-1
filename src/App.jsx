import './App.css';
import ImageWrapper from "./imageWrapper.js";
import { getTvName} from "./helpers/tvNameHelper.js";
import { getTvPrice} from "./helpers/tvPriceHelper.js";
import {getScreenSize} from "./helpers/tvScreensHelper.js";
import {bestSellingTv, calculateSoldTvs} from "./helpers/helperFunctionTotalSold.js";
import {calculatePurchasedTvs} from "./helpers/helperFunctionTotalPurchased.js";
import {calculateRemainingTvs} from "./helpers/helperFuntionTotalRemaining.js";
import { inventory } from "./constants/inventory.js";
import check from "./assets/check.png";
import minus from "./assets/minus.png";

function App() {
    const totalSold = calculateSoldTvs(inventory);
    const totalPurchased = calculatePurchasedTvs(inventory);
    const brandList = inventory.map(brandName => brandName.brand);

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
                {/*</div>*/}
                    <article className="button-container">
                        <div className="button-item">
                            <img className="buttons" src={check} alt=""/>
                            <p>wifi</p>
                        </div>
                        <div className="button-item">
                            <img className="buttons" src={minus} alt=""/>
                            <p>speech</p>
                        </div>
                        <div className="button-item">
                            <img className="buttons" src={check} alt=""/>
                            <p>hdr</p>
                        </div>
                        <div className="button-item">
                            <img className="buttons" src={check} alt=""/>
                            <p>bluetooth</p>
                        </div>
                        <div className="button-item">
                            <img className="buttons" src={minus} alt=""/>
                            <p>ambilight</p>
                        </div>
                    </article>
            </div>

            </div>
            <div>

                <ul>
                    {inventory.map(brandName => (
                        <li key={brandName.type}>{brandName.brand}</li>
                    ))}
                </ul>
            </div>
            <div className="heading-container">
                <h1 className="heading">All TV's</h1>
            </div>
            {inventory.map((tv) => (
                <div key={tv.type} className="alltvs-outer-container">
                    <div className="image-container">
                        <ImageWrapper/>
                    </div>
                    {/*<div className="inner-container-2">*/}
                    <div className="text-container">
                        <h2>{getTvName(tv)}</h2>
                        <h1>{getTvPrice(tv)}</h1>
                        <h2>{getScreenSize(tv)}</h2>
                    </div>
                    <article className="button-container">
                        <div className="button-item">
                            <img className="buttons" src={check} alt=""/>
                            <p>wifi</p>
                        </div>
                        <div className="button-item">
                            <img className="buttons" src={minus} alt=""/>
                            <p>speech</p>
                        </div>
                        <div className="button-item">
                            <img className="buttons" src={check} alt=""/>
                            <p>hdr</p>
                        </div>
                        <div className="button-item">
                            <img className="buttons" src={check} alt=""/>
                            <p>bluetooth</p>
                        </div>
                        <div className="button-item">
                            <img className="buttons" src={minus} alt=""/>
                            <p>ambilight</p>
                        </div>
                    </article>

                </div>
            ))}
        </>
    )
}

export default App
