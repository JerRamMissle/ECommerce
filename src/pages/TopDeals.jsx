import { useState } from "react";
import cookbook from "../assets/cookbook.jpeg"
import cross from "../assets/cross.jpeg"
import snorlax from "../assets/snorlax.jpeg"
import katana from "../assets/katana.jpeg"
import headband from "../assets/headband.jpeg"

export default function TopDeals({ updateCart }) {
    const cookbookDescription = `The Anarchist Cookbook, first published in 1971, is a book containing instructions 
    for the manufacture of explosives, rudimentary telecommunications phreaking devices, and related weapons, as well as instructions 
    for the home manufacture of illicit drugs, including LSD. It was written by William Powell at the apex of the counterculture era to 
    protest against United States's involvement in the Vietnam War. Powell converted to Anglicanism in 1976 and later attempted to have 
    the book removed from circulation. However, the copyright belonged to the publisher, who continued circulation until the company was
     acquired in 1991. Its legality has been questioned in several jurisdictions.`
    const cookbookPrice = `23.99`
    const crossDescription = `crucifix, a model of the Christian cross, upon which is a depiction of the crucified Jesus.

    Paolo Veneziano: The Crucifixion
    Paolo Veneziano: The Crucifixion
    For several centuries after Constantine, Christian devotion to the cross centred in 
    its indication of the victory of Christ over the powers of evil and death. Indeed, the 
    Church Fathers often explained the cross as a cosmic sign of Christ’s universal dominion—its
     four projections reaching out to embrace and bring under his subjection “the breadth and length 
     and height and depth” 
    (Ephesians 3:18) of all creation. Realistic portrayal of his suffering was avoided.`
    const crossPrice = `16.99`
    const katanaDescription = `A katana (刀，かたな) is a Japanese sword characterized by 
    a curved, single-edged blade with a circular or squared guard and long grip to accommodate 
    two hands. Developed later than the tachi, it was used by samurai in feudal Japan and worn with 
    the edge facing upward. Since the Muromachi period, many old tachi were cut from the root and shortened,
     and the blade at the root was crushed and converted into katana.[4] The specific term for katana in Japan is
     uchigatana (打刀) and the term katana (刀) often refers to single-edged swords from around the world.[5]`
    const katanaPrice = `69.99`
    const snorlaxDescription = `Zhenfala Snorlax Bean Bag Chair Giant Unstuffed Snorlax Plush Toy Anime Cover...
    Snorlax (/ˈsnɔːrlæks/), known in Japan as Kabigon (カビゴン), is a Pokémon species, a type of Pocket Monster, 
    in Nintendo and Game Freak's Pokémon franchise. Created by Ken Sugimori, Snorlax first appeared in the Game Boy
     video game Pokémon Red and Blue, and subsequent sequels, later appearing in various merchandise, spin-off titles, 
     and animated and printed adaptations of the franchise. Snorlax is a large, blueish creature with closed slit eyes
      and a closed mouth that features two upwardly protruding teeth. `
    const snorlaxPrice = `66.61`
    const headbandDescription = `Great Eastern Entertainment
    Naruto Anti Leaf Village Headband
    The Naruto Headband (額当て，Hitai-ate) is a ninja accessory created by Masashi Kishimoto, 
    the author of the manga shonen and the anime Naruto, and is used to indicate which village a 
    ninja comes from and is always placed in a 
    prominent position so that it is easy to spot where the ninja comes from, whether it
     is a friend or an enemy.`
    const headbandPrice = `17.04`

    return (
        <>
            <h1>Top Deals</h1>


            <div>
                <div className="Grid2Container">

                    <h2>Check Out Your List</h2>
                    <h2>Description</h2>
                    <h2>Add to cart</h2>
                    <img src={cookbook} />
                    <p>{cookbookDescription}</p>
                    <div>
                        <button onClick={(e) => updateCart({ page: 'deals', id: 0, img: cookbook, src: cookbook, description: cookbookDescription, price: cookbookPrice })} className="button">Add to cart</button>
                        <h3>Price: ${cookbookPrice}</h3>
                    </div>


                    <img src={cross} />
                    <p>{crossDescription}
                    </p>
                    <div>
                        <button onClick={(e) => updateCart({ page: 'deals', id: 0, img: cross, src: cross, description: crossDescription, price: crossPrice })} className="button">Add to cart</button>
                        <h3>Price: ${crossPrice}</h3>
                    </div>
                    <img src={katana} />
                    <p>{katanaDescription}</p>
                    <div>
                        <button onClick={(e) => updateCart({ page: 'deals', id: 0, img: katana, src: katana, description: katanaDescription, price: katanaPrice })} className="button">Add to cart</button>
                        <h3>Price: ${katanaPrice}</h3>
                    </div>
                    <img src={headband} />
                    <p>{headbandDescription}</p>
                    <div>
                        <button onClick={(e) => updateCart({ page: 'deals', id: 0, img: headband, src: headband, description: headbandDescription, price: headbandPrice })} className="button">Add to cart</button>
                        <h3>Price: ${headbandPrice}</h3>
                    </div>
                    <img src={snorlax} />
                    <p>{snorlaxDescription}</p>
                    <div>
                        <button onClick={(e) => updateCart({ page: 'deals', id: 0, img: snorlax, src: snorlax, description: snorlaxDescription, price: snorlaxPrice })} className="button">Add to cart</button>
                        <h3>Price: ${snorlaxPrice}</h3>
                    </div>
                </div >
            </div>
        </>
    )
}