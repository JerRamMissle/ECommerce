import { useState } from "react";
import bible from "../assets/bible.jpeg"
import gigachad from "../assets/gigachad.jpeg"
import pulpfiction from "../assets/pulpfiction.jpeg"
import americanpsycho from "../assets/americanpsycho.jpeg"
import pinetar from "../assets/pinetar.jpeg"


export default function Explore({ updateCart }) {
    const bibleDescription = `yes`
    const biblePrice = `14.88`
    const gigachadDescription = `yes`
    const gigachadPrice = `8.89`
    const pulpfictionDescription = `yes`
    const pulpfictionPrice = `13.99`
    const americanpsychoDescription = `gg`
    const americanpsychoPrice = `8.99`
    const pinetarDescription = `gg`
    const pinetarPrice = `6.99`
    return (
        <>
            <h1>Explore</h1>


            <div>
                <div className="Grid2Container">

                    <h2>Check Out Your List</h2>
                    <h2>Description</h2>
                    <h2>Add to cart</h2>
                    <img src={bible} />
                    <p>{bibleDescription}</p>
                    <div>

                        <button onClick={(e) => updateCart({ id: 0, img: bible, src: bible, description: bibleDescription, price: biblePrice })} className="button">Add to cart</button>
                        <h3>Price: ${biblePrice}</h3>
                    </div>


                    <img src={gigachad} />
                    <p>{gigachadDescription} </p>
                    <div>

                        <button onClick={(e) => updateCart({ id: 0, img: gigachad, src: gigachad, description: gigachadDescription, price: gigachadPrice })} className="button">Add to cart</button>
                        <h3>Price: ${gigachadPrice}</h3>
                    </div>


                    <img src={pulpfiction} />
                    <p>{pulpfictionDescription}</p>
                    <div>

                        <button onClick={(e) => updateCart({ id: 0, img: pulpfiction, src: pulpfiction, description: pulpfictionDescription, price: pulpfictionPrice })} className="button">Add to cart</button>
                        <h3>Price: ${pulpfictionPrice}</h3>
                    </div>


                    <img src={americanpsycho} />
                    <p>{americanpsychoDescription}</p>
                    <div>

                        <button onClick={(e) => updateCart({ id: 0, img: americanpsycho, src: americanpsycho, description: americanpsychoDescription, price: americanpsychoPrice })} className="button">Add to cart</button>
                        <h3>Price: ${americanpsychoPrice}</h3>
                    </div>

                    <img src={pinetar} />
                    <p>{pinetarDescription}</p>
                    <div>

                        <button onClick={(e) => updateCart({ id: 0, img: pinetar, src: pinetar, description: pinetarDescription, price: pinetarPrice })} className="button">Add to cart</button>
                        <h3>Price: ${pinetarPrice}</h3>
                    </div>


                </div >
            </div>
        </>
    )


}
