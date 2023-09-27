import { useState } from "react";
import biscuits from "../assets/biscuits.jpeg"
import armor from "../assets/armor.jpeg"
import blackCannon from "../assets/blackCannon.jpeg"
import cannonball from "../assets/cannonball.jpeg"
import rushHour from "../assets/rushHour.jpeg"
import tokyodrift from "../assets/tokyodrift.jpeg"
import theHateful8 from "../assets/theHateful8.jpeg"
import tommyBoy from "../assets/tommyBoy.jpeg"
import billyMadisonHapGilmore from "../assets/billyMadisonHapGilmore.jpeg"
import hole from "../assets/hole.jpeg"
import { productsArray } from "../Product info";

export default function JustForYou({ updateCart }) {

    return (

        <>
            <h1>Just For You</h1>

            <div>

                {productsArray.map((e, i) => {
                    return (
                        <>
                            {
                                productsArray[i].category === "JustForYou" &&
                                <div className="Grid2Container" style={productsArray[i].id === 11 ? { height: "450px" } : null} key={productsArray[i] + " " + i}>
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