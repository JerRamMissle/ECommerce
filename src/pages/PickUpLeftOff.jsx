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

                {productsArray.map((e, i) => {
                    return (
                        <>
                            {
                                productsArray[i].category === "PickUpLeftOff" &&
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

