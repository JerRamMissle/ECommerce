import { useState } from "react";
import bible from "../assets/bible.jpeg"
import gigachad from "../assets/gigachad.jpeg"
import pulpfiction from "../assets/pulpfiction.jpeg"
import americanpsycho from "../assets/americanpsycho.jpeg"
import pinetar from "../assets/pinetar.jpeg"
import { productsArray } from "../Product info";

export default function Explore({ updateCart }) {

    return (
        <>
            <h1>Explore</h1>
            <div>
                <div className="Grid2Container">
                    {productsArray.map((e, i) => (
                        <>
                            {
                                productsArray[i].category === "Explore" &&
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