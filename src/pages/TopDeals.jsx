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
                <div className="Grid2Container">
                    {productsArray.map((e, i) => (
                        <>
                            {
                                productsArray[i].category === "TopDeals" &&
                                <div>
                                    < div >
                                        {productsArray[i].title}

                                    </div >
                                    < div >

                                        {productsArray[i].description}
                                    </div >
                                    <div className="img">
                                        <img src={productsArray[i].image} />
                                    </div>
                                    < div >

                                        {productsArray[i].price}
                                    </div >
                                    <div>
                                        <button onClick={(e) => updateCart(productsArray[i])}
                                            className="button">Add to cart</button>

                                    </div>
                                </div>
                            }
                        </>
                    )

                    )}


                </div >
            </div >
        </>
    )


}