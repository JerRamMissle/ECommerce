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

export default function JustForYou({ updateCart }) {
    const armorDescription = `Proven to protect you from an arrow in the knee for whenever the cavalry comes to attack.`
    const armorPrice = `699.99`
    const biscuitsDescription = `Look at the kitty working so hard to make your favorite buttery snack, 
    maybe he can start selling them and pay some bills finally!!`
    const biscuitsPrice = `7.99`
    const blackCannonDescription = `VINTAGE BLACK POWDER CANNON CAST IRON WHEELS BRASS TRIM WITH OAK WOOD:
    There were many fortresses, castles, and strongholds 
    in Arda, such as Minas Tirith, 
    Helm's Deep, Isengard, Minas Morgul,
     and Barad-dûr. All were strong buildings most of which were built for defensive purposes. 
    They were usually made of stone, and archers could shoot safely
     from behind the walls. Use this cannons great might to fend off oncoming warriors from stormgate, aim well and dont miss for the fate of the cavalry is at stake.`
    const blackCannonPrice = `450.50`
    const cannonballDescription = `If you're buying the cannon laddy then we suggest getting at least one set of x25 cannonballs with it. To a journey on the seven seas we go!`
    const cannonballPrice = `125`
    const rushHourDescription = `Rush Hour 3 is a 2007 American buddy action comedy film directed by Brett Ratner, 
    written by Jeff Nathanson, and starring Jackie Chan, Chris Tucker, Max von Sydow, Hiroyuki Sanada, Noémie Lenoir, 
    Yvan Attal and Youki Kudoh. It is the third installment in the Rush Hour franchise and centers on Inspector Lee (Chan) and Officer Carter 
    (Tucker) tracking an assassin to Paris to unravel a mystery about the Chinese triads. Announced on May 7, 2006, filming began on July 4 on 
    location in Paris and Los Angeles. Released on August 10, 2007, 
    the film received negative reviews and grossed $258.1 million worldwide against a $140 million budget.`
    const rushHourPrice = `4.99`
    const tokyodriftDescription = `The Fast and the Furious: Tokyo Drift is a 2006 action film directed by Justin Lin 
   and written by Chris Morgan. It is the standalone sequel to The Fast and the Furious (2001) and 2 Fast 2 Furious (2003),
    and the third installment in the Fast & Furious franchise. It stars Lucas Black and Bow Wow. In the film, car enthusiast 
    Sean Boswell (Black) is sent to live in Tokyo with his estranged father and finds solace exploring the city's drifting community.
   A third Fast & Furious film was confirmed in June 2005, when Lin was selected as director. Morgan was hired after an open call soon
    after, thus marking the first film in the franchise's longtime association with Lin, Morgan, actor Sung Kang, and composer Brian Tyler.
    [6][7] Principal photography began in August 2005 and lasted until that November, with filming locations including Los Angeles and Tokyo,
     making Tokyo Drift the first film in the franchise to feature an international filming location.
   The Fast and the Furious: Tokyo Drift premiered at the Gibson Amphitheatre in Los Angeles on June 4, 2006,
    and was released in the United States on June 16, by Universal Pictures. Tokyo Drift grossed $159 million worldwide, 
    making it the lowest-grossing film in the franchise. `
    const tokyodriftPrice = `4.89`
    const theHateful8Description = `The Hateful Eight (sometimes marketed as The H8ful Eight or The Hateful 8) is a
      2015 American Western mystery thriller film written and directed by Quentin Tarantino. It stars Samuel L. Jackson,
       Kurt Russell, Jennifer Jason Leigh, Walton Goggins, Demián Bichir, Tim Roth, Michael Madsen and Bruce Dern, as
        eight strangers who seek refuge from a blizzard in a stagecoach stopover some time after the American Civil War.`
    const theHateful8Price = `7.99`
    const tommyBoyDescription = `ffgggg`
    const tommyBoyPrice = `6.99`
    const billyMadisonHapGilmoreDescription = `This set combines the first two Adam Sandler starring vehicles. 
    Happy Gilmore features the former SNL star as a former hockey player who finds success as a professional golfer. 
    Billy Madison finds the comic as the spoiled son of a millionaire who is forced to return to elementary school in order to 
    eventually graduate and receive his substantial inheritance. Sandler ended up naming his production company by combining the
     titles of these movies.`
    const billyMadisonHapGilmorePrice = `11.38`
    const holeDescription = `Holes is a 2003 American neo-Western comedy-drama film 
    directed by Andrew Davis and written by Louis Sachar, based on his novel of the same name, 
    originally published in August 1998. The film stars Sigourney Weaver, Jon Voight,
     Patricia Arquette, Tim Blake Nelson and Shia LaBeouf.`
    const holePrice = `10.99`
    //  var array = [armor, biscuits, blackCannon, rushHour, tokyodrift, theHateful8, tommyBoy, billyMadisonHapGilmore]
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     const newFilteredProducts = filteredProducts.filter((product) => {
    //       return (
    //         product.title.toLowerCase().includes(term.toLowerCase()) &&
    //         (!category || product.category.includes(category)) &&
    //         product.price >= (minPrice || 0) &&
    //         (!maxPrice || product.price <= maxPrice)
    //       );
    //     });
    //     setFilteredProducts(newFilteredProducts);
    //   }
    // }
    return (

        <>
            <h1>Just For You</h1>
            {/* <div>
                <button onClick={ }></button>
                  </div> */}

            <div>
                <div className="Grid2Container">

                    <h2>Check Out Your List</h2>
                    <h2>Description</h2>
                    <h2>Add to cart</h2>
                    <img src={armor} />
                    <p>{armorDescription}</p>
                    <div>
                        <button onClick={(e) => updateCart({ id: 0, img: armor, src: armor, description: armorDescription, price: armorPrice })}
                            className="button">Add to cart</button>
                        <h3>Price: ${armorPrice}</h3>
                    </div>



                    <img src={biscuits} />
                    <p>{biscuitsDescription}
                    </p>
                    <div>
                        <button onClick={(e) => updateCart({ id: 0, img: biscuits, src: biscuits, description: biscuitsDescription, price: biscuitsPrice })} className="button">Add to cart</button>
                        <h3>Price: ${biscuitsPrice}</h3>
                    </div>

                    <img src={blackCannon} />
                    <p>{blackCannonDescription}</p>
                    <div>
                        <button onClick={(e) => updateCart({ id: 0, img: blackCannon, src: blackCannon, description: blackCannonDescription, price: blackCannonPrice })} className="button">Add to cart</button>
                        <h3>Price: ${blackCannonPrice}</h3>
                    </div>

                    <img src={cannonball} />
                    <p>{cannonballDescription}</p>
                    <div>
                        <button onClick={(e) => updateCart({ id: 0, img: cannonball, src: cannonball, description: cannonballDescription, price: cannonballPrice })} className="button">Add to cart</button>
                        <h3>Price: ${cannonballPrice} </h3>
                    </div>

                    <img src={rushHour} />
                    <p>{rushHourDescription}</p>
                    <div>
                        <button onClick={(e) => updateCart({ id: 0, img: rushHour, src: rushHour, description: rushHourDescription, price: rushHourPrice })} className="button">Add to cart</button>
                        <h3>Price: ${rushHourPrice} </h3>
                    </div>

                    <img src={tokyodrift} />
                    <p>{tokyodriftDescription}</p>
                    <div>
                        <button onClick={(e) => updateCart({ id: 0, img: tokyodrift, src: tokyodrift, description: tokyodriftDescription, price: tokyodriftPrice })} className="button">Add to cart</button>
                        <h3>Price: ${tokyodriftPrice} </h3>
                    </div>
                    <img src={theHateful8} />
                    <p>{theHateful8Description}</p>
                    <div>
                        <button onClick={(e) => updateCart({ id: 0, img: theHateful8, src: theHateful8, description: theHateful8Description, price: theHateful8Price })} className="button">Add to cart</button>
                        <h3>Price: ${theHateful8Price} </h3>
                    </div>

                    <img src={tommyBoy} />
                    <p>{tommyBoyDescription}</p>
                    <div>
                        <button onClick={(e) => updateCart({ id: 0, img: tommyBoy, src: tommyBoy, description: tommyBoyDescription, price: tommyBoyPrice })} className="button">Add to cart</button>
                        <h3>Price: ${tommyBoyPrice} </h3>
                    </div>

                    <img src={billyMadisonHapGilmore} />
                    <p>{billyMadisonHapGilmoreDescription}</p>
                    <div>
                        <button onClick={(e) => updateCart({ id: 0, img: billyMadisonHapGilmore, src: billyMadisonHapGilmore, description: billyMadisonHapGilmoreDescription, price: billyMadisonHapGilmorePrice })} className="button">Add to cart</button>
                        <h3>Price: ${billyMadisonHapGilmorePrice} </h3>
                    </div>

                    <img src={hole} />
                    <p>{holeDescription}</p>
                    <div>
                        <button onClick={(e) => updateCart({ id: 0, img: hole, src: hole, description: holeDescription, price: holePrice })} className="button">Add to cart</button>
                        <h3>Price: ${holePrice} </h3>
                    </div>
                </div >
            </div>
        </>
    )
}