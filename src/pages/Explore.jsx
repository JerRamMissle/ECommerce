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

                {productsArray.map((e, i) => {
                    return (
                        <>
                            {
                                productsArray[i].category === "Explore" &&
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