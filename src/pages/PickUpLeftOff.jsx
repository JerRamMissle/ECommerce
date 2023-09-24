import { useState } from "react";
import xbox from "../assets/xbox.jpeg"
import LOTR from "../assets/LOTR.jpeg"
import Dantes from "../assets/Dantes.jpeg"
import dude from "../assets/dude.jpeg"
import BlackRiffle from "../assets/BlackRiffle.jpeg"
import { productsArray } from "../Product info";





export default function PickUpLeftOff({ updateCart }) {

    return (
        <>
            <h1>Pick Up Where You Left Off</h1>


            <div>
                <div className="Grid2Container">
                    {productsArray.map((e, i) => (
                        <>
                            {
                                productsArray[i].category === "PickUpLeftOff" &&
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

