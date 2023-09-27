import { useState } from "react";
import cookbook from "../assets/cookbook.jpeg"
import cross from "../assets/cross.jpeg"
import snorlax from "../assets/snorlax.jpeg"
import katana from "../assets/katana.jpeg"
import headband from "../assets/headband.jpeg"
import { productsArray } from "../Product info";

export default function TopDeals({ updateCart }) {


    return (
        <>
            <h1>Top Deals</h1>



            <div>

                {productsArray.map((e, i) => {
                    return (
                        <>
                            {
                                productsArray[i].category === "TopDeals" &&
                                <div className="Grid2Container" key={productsArray[i] + " " + i}>
                                    < div >
                                        {productsArray[i].title}
                                        <div className="img">
                                            <img src={productsArray[i].image} />
                                        </div>
                                    </div >
                                    < div >
                                        {productsArray[i].description}
                                    </div >
                                    <div>
                                        {productsArray[i].price}
                                        <button onClick={(e) => updateCart(productsArray[i])}
                                            className="button">Add to cart</button>

                                    </div>
                                </div>
                            }
                        </>
                    )



                }

                )}



            </div >
        </>
    )


}