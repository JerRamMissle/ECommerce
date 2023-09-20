import { useState } from "react";
import xbox from "../assets/xbox.jpeg"
import LOTR from "../assets/LOTR.jpeg"
import Dantes from "../assets/Dantes.jpeg"
import dude from "../assets/dude.jpeg"
import BlackRiffle from "../assets/BlackRiffle.jpeg"




export default function PickUpLeftOff({ updateCart }) {
    const xboxDescription = `Best Gaming console out there. Unless you have a PC already we suggest buying this bad boy for a real users experience.
What do you wanna be, some normie with a PS5? Hah might as well buy an iPhone and a Tesla while your at it like a real zoomer.
Only true Gigachads use Xbox as their primary gaming console while driving gas powered cars with an Android playing tunes through the
headphone jacks AUX cord.`
    const xboxPrice = ` 499.99`
    const LOTRDescription = `Not all those who wander are lost.” — Bilbo Baggins
    Come game LOTR as an elf while saving your Trad Princess from a castle being surrounded by goblins.`
    const LOTRPrice = `21.99`
    const DantesDescription = `Become a defender of Christ and save your Trad Wifu in hell from demons and hellraises in an
    epic third person midevil conquest to defeat satan and return honor to the cavalry`
    const DantesPrice = `14.99`
    const dudeDescription = `Need something better than your average baby wipes from target for no reason at all? Well yes you do, 
    because your not a baby, your a dude who needs dude wipes for all dude related activity. DUUDE SWEET!!`
    const dudePrice = `3.99`
    const BlackRiffleDescription = `Forget paying $7 a day for your carmel
    macciato iced latte with an extra expresso
    shot. Once you have a sip of black riffles
    finest ground coffee beans youll remember what
    its like to taste freedom. Get it now and well
    throw in a pack of
    dude wipes for 50% off right now!`
    const BlackRifflePrice = `5.99`
    return (
        <>
            <h1>Pick Up Where You Left Off</h1>


            <div>
                <div className="Grid2Container">

                    <h2>Check Out Your List</h2>
                    <h2>Description</h2>
                    <h2>Add to cart</h2>
                    <img src={xbox} alt="Xbox" />

                    <p > {xboxDescription}</p>
                    <div>

                        <button onClick={(e) => updateCart({ id: 0, img: xbox, src: xbox, description: xboxDescription, price: xboxPrice })} className="button">Add to cart</button>
                        <h3>Price: ${xboxPrice}</h3>
                    </div>



                    <img src={LOTR} />
                    <p>{LOTRDescription}
                    </p>
                    <div>
                        <button onClick={(e) => updateCart({ id: 0, img: LOTR, src: LOTR, description: LOTRDescription, price: LOTRPrice })} className="button">Add to cart</button>
                        <h3>Price: ${LOTRPrice}</h3>
                    </div>
                    <img src={Dantes} />
                    <p>{DantesDescription}</p>
                    <div>
                        <button onClick={(e) => updateCart({ id: 0, img: Dantes, src: Dantes, description: DantesDescription, price: DantesPrice })} className="button">Add to cart</button>
                        <h3>Price: ${DantesPrice}</h3>
                    </div>
                    <img src={dude} />
                    <p>{dudeDescription}</p>
                    <div>
                        <button onClick={(e) => updateCart({ id: 0, img: dude, src: dude, description: dudeDescription, price: dudePrice })} className="button">Add to cart</button>
                        <h3>Price: ${dudePrice}</h3>
                    </div>
                    <img src={BlackRiffle} />
                    <p>{BlackRiffleDescription}</p>
                    <div>
                        <button onClick={(e) => updateCart({ id: 0, img: BlackRiffle, src: BlackRiffle, description: BlackRiffleDescription, price: BlackRifflePrice })} className="button">Add to cart</button>
                        <h3>Price: ${BlackRifflePrice}</h3>
                    </div>
                </div >
            </div >
        </>
    )


}

