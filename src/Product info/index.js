const productsArray = [
    {
        id: 1,
        title: "Bible",
        price: "$14.88",
        description: "This is the HOLIEST of all bibles, buy now, plz I need rent money, NOW!!",
        category: "explore",
        image: "https://cdn.discordapp.com/attachments/1029090896274268191/1154546566527455313/bible.jpeg"
    },
    {
        id: 2,
        title: "Gigachad",
        price: "$8.89",
        description: "Chad Wellington was an understatment, this IS the CHAD of ALL Chads. ",
        category: "explore",
        image: "https://cdn.discordapp.com/attachments/1029090896274268191/1154550559693602816/gigachad.jpeg"
    },
    {
        id: 3,
        title: "Pulp Fiction",
        price: "$13.99",
        description: "DO THEY SPEAK ENGLISH IN WHAT!?!?!?",
        category: "explore",
        image: "https://tse2.mm.bing.net/th?id=OIP.xkD3SJsc7E1tO2uarQWZeQHaHa&pid=Api&P=0&h=220"
    },
    {
        id: 4,
        title: "American Psycho",
        price: "$8.99",
        description: "...there is an idea of a Patrick Bateman, some kind of abstraction, but there is no real me, only an entity, something illusory, and though I can hide my cold gaze and you can shake my hand and feel flesh gripping yours and maybe you can even sense our lifestyles are probably comparable: I simply am not there.",
        category: "explore",
        image: "https://tse4.mm.bing.net/th?id=OIP.nQJfVmy09AsSW6P8rQy-iwHaFi&pid=Api&P=0&h=220"
    },
    {
        id: 5,
        title: "Dr. Squatch Pinetar Soap",
        price: "$6.99",
        description: "Made with real pine extract, this all-star bar is as tough as a freshly cut bat. A true MVP of the shower, this heavy-hitter knocks out grime with its gritty composition and ultra-manly, woodsy scent. Toss in the exfoliating oatmeal and the super-soothing shea butter, and you've got a bullpen of natural ingredients that will strike out any stink.",
        category: "explore",
        image: "https://tse4.mm.bing.net/th?id=OIP.ZdPU7NhwZhDC2SYAfRIiGgHaE8&pid=Api&P=0&h=220"
    },
    {
        id: 6,
        title: "Cavalry Armor",
        price: "$699.99",
        description: "Proven to protect you from an arrow in the knee for whenever the cavalry comes to attack.",
        category: "JustForYou",
        image: "https://tse1.mm.bing.net/th?id=OIP.TILA3xAsv-tFvZ11NRgLxAHaKN&pid=Api&P=0&h=220"
    },
    {
        id: 7,
        title: "Tin wall hanging kitty biscuits frame",
        price: "$7.99",
        description: "Look at the kitty working so hard to make your favorite buttery snack, maybe he can start selling them and pay some bills finally!!",
        category: "JustForYou",
        image: "https://tse1.mm.bing.net/th?id=OIP.nwtj1zlmcnlFDhJ4l78HvwHaJQ&pid=Api&P=0&h=220"
    },
    {
        id: 8,
        title: "Vintage 16th Century black power cannon with cast iron wheels",
        price: "$450.50",
        description: "VINTAGE BLACK POWDER CANNON CAST IRON WHEELS BRASS TRIM WITH OAK WOOD: There were many fortresses, castles, and strongholds in Arda, such as Minas Tirith, Helm's Deep, Isengard, Minas Morgul, and Barad-dûr. All were strong buildings most of which were built for defensive purposes. They were usually made of stone, and archers could shoot safely from behind the walls. Use this cannons great might to fend off oncoming warriors from stormgate, aim well and dont miss for the fate of the cavalry is at stake.",
        category: "JustForYou",
        image: "https://tse4.mm.bing.net/th?id=OIP.zGuN-BoawEU48vDjsLNsYgHaEK&pid=Api&P=0&h=220"
    },
    {
        id: 9,
        title: "Cannonball set of x25",
        price: "$125",
        description: "If you're buying the cannon laddy then we suggest getting at least one set of x25 cannonballs with it. To a journey on the seven seas we go!",
        category: "JustForYou",
        image: "https://tse3.mm.bing.net/th?id=OIP.WStPqUdOaAaDEeDPrSRqhAHaEO&pid=Api&P=0&h=220"
    },
    {
        id: 10,
        title: "Rush Hour 3",
        price: "$4.99",
        description: "Rush Hour 3 is a 2007 American buddy action comedy film directed by Brett Ratner, written by Jeff Nathanson, and starring Jackie Chan, Chris Tucker, Max von Sydow, Hiroyuki Sanada, Noémie Lenoir, Yvan Attal and Youki Kudoh. It is the third installment in the Rush Hour franchise and centers on Inspector Lee (Chan) and Officer Carter (Tucker) tracking an assassin to Paris to unravel a mystery about the Chinese triads. Announced on May 7, 2006, filming began on July 4 on location in Paris and Los Angeles. Released on August 10, 2007, the film received negative reviews and grossed $258.1 million worldwide against a $140 million budget.",
        category: "JustForYou",
        image: "https://tse1.mm.bing.net/th?id=OIP.flHYAgWpILR1mprYXYOGewHaLH&pid=Api&P=0&h=220"
    },
    {
        id: 11,
        title: "Need for Speed: Tokyo Drift",
        price: "$4.89",
        description: "The Fast and the Furious: Tokyo Drift is a 2006 action film directed by Justin Lin and written by Chris Morgan. It is the standalone sequel to The Fast and the Furious (2001) and 2 Fast 2 Furious (2003), and the third installment in the Fast & Furious franchise. It stars Lucas Black and Bow Wow. In the film, car enthusiast Sean Boswell (Black) is sent to live in Tokyo with his estranged father and finds solace exploring the city's drifting community. A third Fast & Furious film was confirmed in June 2005, when Lin was selected as director. Morgan was hired after an open call soon after, thus marking the first film in the franchise's longtime association with Lin, Morgan, actor Sung Kang, and composer Brian Tyler. [6][7] Principal photography began in August 2005 and lasted until that November, with filming locations including Los Angeles and Tokyo, making Tokyo Drift the first film in the franchise to feature an international filming location. The Fast and the Furious: Tokyo Drift premiered at the Gibson Amphitheatre in Los Angeles on June 4, 2006, and was released in the United States on June 16, by Universal Pictures. Tokyo Drift grossed $159 million worldwide, making it the lowest-grossing film in the franchise.",
        category: "JustForYou",
        image: "https://tse3.mm.bing.net/th?id=OIP.qWaoWS6tktODQ950hd-UkQHaLH&pid=Api&P=0&h=220"
    },
    {
        id: 12,
        title: "The Hateful Eight",
        price: "$7.99",
        description: "The Hateful Eight (sometimes marketed as The H8ful Eight or The Hateful 8) is a 2015 American Western mystery thriller film written and directed by Quentin Tarantino. It stars Samuel L. Jackson, Kurt Russell, Jennifer Jason Leigh, Walton Goggins, Demián Bichir, Tim Roth, Michael Madsen and Bruce Dern, as eight strangers who seek refuge from a blizzard in a stagecoach stopover some time after the American Civil War.",
        category: "JustForYou",
        image: "https://tse1.mm.bing.net/th?id=OIP.zoDtykuENgNJKTPpM-lbFgHaE8&pid=Api&P=0&h=220"
    },
    {
        id: 13,
        title: "Tommy Boy the movie",
        price: "$6.99",
        description: "Tommy Boy is one of those movies that plays like an explosion down at the screenplay factory. You can almost picture a bewildered office boy, his face smudged with soot, wandering through the ruins and rescuing pages at random. Too bad they didn't mail them to the insurance company instead of filming them.",
        category: "JustForYou",
        image: "https://tse4.mm.bing.net/th?id=OIP.v8lMmEFoYBPwbfCumKDyFgHaLH&pid=Api&P=0&h=220"
    },
    {
        id: 14,
        title: "Billy Madison Happy Gilmore double bundle",
        price: "$11.38",
        description: "This set combines the first two Adam Sandler starring vehicles. Happy Gilmore features the former SNL star as a former hockey player who finds success as a professional golfer. Billy Madison finds the comic as the spoiled son of a millionaire who is forced to return to elementary school in order to eventually graduate and receive his substantial inheritance. Sandler ended up naming his production company by combining the titles of these movies.",
        category: "JustForYou",
        image: "https://tse4.mm.bing.net/th?id=OIP.JR8tt3G5xiUqI6YQdD_59AHaJg&pid=Api&P=0&h=220"
    },
    {
        id: 15,
        title: "Holes",
        price: "$10.99",
        description: "Holes is a 2003 American neo-Western comedy-drama film directed by Andrew Davis and written by Louis Sachar, based on his novel of the same name, originally published in August 1998. The film stars Sigourney Weaver, Jon Voight, Patricia Arquette, Tim Blake Nelson and Shia LaBeouf.",
        category: "JustForYou",
        image: "https://tse1.mm.bing.net/th?id=OIP._-bk1_CarEcBAl2HvnuMPgHaLH&pid=Api&P=0&h=220"
    },
    {
        id: 16,
        title: "Xbox Series X",
        price: "$499.99",
        description: "Best Gaming console out there. Unless you have a PC already we suggest buying this bad boy for a real users experience. What do you wanna be, some normie with a PS5? Hah might as well buy an iPhone and a Tesla while your at it like a real zoomer. Only true Gigachads use Xbox as their primary gaming console while driving gas powered cars with an Android playing tunes through the headphone jacks AUX cord.",
        category: "PickUpLeftOff",
        image: "https://tse3.mm.bing.net/th?id=OIP.7SZR3IKM3wze-C3gt7tzFAHaEo&pid=Api&P=0&h=220"
    },
    {
        id: 17,
        title: "Lord Of The Rings: The Two Towers for GameBoy Advanced",
        price: "$21.99",
        description: "Not all those who wander are lost.” — Bilbo Baggins Come game LOTR as an elf while saving your Trad Princess from a castle being surrounded by goblins.",
        category: "PickUpLeftOff",
        image: "https://tse3.mm.bing.net/th?id=OIP.I0VDuqDGMSruGE0MzCTzxgHaHa&pid=Api&P=0&h=220"
    },
    {
        id: 18,
        title: "Dantes Inferno",
        price: "$14.99",
        description: "Become a defender of Christ and save your Trad Wifu in hell from demons and hellraises in an epic third person midevil conquest to defeat satan and return honor to the cavalry",
        category: "PickUpLeftOff",
        image: "https://tse4.mm.bing.net/th?id=OIP.iy0O9zCJRCT6j_f1ntYs-wHaKg&pid=Api&P=0&h=220"
    },
    {
        id: 19,
        title: "Dude Wipes",
        price: "$3.99",
        description: "Need something better than your average baby wipes from target for no reason at all? Well yes you do, because your not a baby, your a dude who needs dude wipes for all dude related activity. DUUDE SWEET!!",
        category: "PickUpLeftOff",
        image: "https://tse2.mm.bing.net/th?id=OIP.btQ5riLTDKFz08YPrhlMxwHaHa&pid=Api&P=0&h=220"
    },
    {
        id: 20,
        title: "BlackRiffle Coffee",
        price: "$5.99",
        description: "Forget paying $7 a day for your carmel macciato iced latte with an extra expresso shot. Once you have a sip of black riffles finest ground coffee beans youll remember what its like to taste freedom. Get it now and well throw in a pack of dude wipes for 50% off right now!",
        category: "PickUpLeftOff",
        image: "https://tse4.mm.bing.net/th?id=OIP.wVXAINyE46OW8csXuZjS9QHaMn&pid=Api&P=0&h=220"
    },
    {
        id: 21,
        title: "The Anarchist Cookbook",
        price: "$23.99",
        description: "The Anarchist Cookbook, first published in 1971, is a book containing instructions for the manufacture of explosives, rudimentary telecommunications phreaking devices, and related weapons, as well as instructions for the home manufacture of illicit drugs, including LSD. It was written by William Powell at the apex of the counterculture era to protest against United States's involvement in the Vietnam War. Powell converted to Anglicanism in 1976 and later attempted to have the book removed from circulation. However, the copyright belonged to the publisher, who continued circulation until the company was acquired in 1991. Its legality has been questioned in several jurisdictions.",
        category: "TopDeals",
        image: "https://tse4.mm.bing.net/th?id=OIP.hq-NonbIUS36Zkc2zbVX4wHaJH&pid=Api&P=0&h=220"
    },
    {
        id: 22,
        title: "Wall Cross Stained Glass",
        price: "$16.99",
        description: "crucifix, a model of the Christian cross, upon which is a depiction of the crucified Jesus. Paolo Veneziano: The Crucifixion Paolo Veneziano: The Crucifixion For several centuries after Constantine, Christian devotion to the cross centred in its indication of the victory of Christ over the powers of evil and death. Indeed, the Church Fathers often explained the cross as a cosmic sign of Christs universal dominion—its four projections reaching out to embrace and bring under his subjection “the breadth and length and height and depth” (Ephesians 3:18) of all creation. Realistic portrayal of his suffering was avoided.",
        category: "TopDeals",
        image: "https://tse1.mm.bing.net/th?id=OIP.0h44NNnHbp0nOx1K-7cPyQHaHa&pid=Api&P=0&h=180"
    },
    {
        id: 23,
        title: "Katana",
        price: "$69.99",
        description: "A katana (刀，かたな) is a Japanese sword characterized by a curved, single-edged blade with a circular or squared guard and long grip to accommodate two hands. Developed later than the tachi, it was used by samurai in feudal Japan and worn with the edge facing upward. Since the Muromachi period, many old tachi were cut from the root and shortened, and the blade at the root was crushed and converted into katana.[4] The specific term for katana in Japan is uchigatana (打刀) and the term katana (刀) often refers to single-edged swords from around the world.[5]",
        category: "TopDeals",
        image: "https://tse4.mm.bing.net/th?id=OIP.g2dC-zdaK70REfes1DX2-gHaFj&pid=Api&P=0&h=220"
    },
    {
        id: 24,
        title: "Snorlax Bean Bag Chair",
        price: "$66.61",
        description: "Zhenfala Snorlax Bean Bag Chair Giant Unstuffed Snorlax Plush Toy Anime Cover... Snorlax (/ˈsnɔːrlæks/), known in Japan as Kabigon (カビゴン), is a Pokémon species, a type of Pocket Monster, in Nintendo and Game Freak's Pokémon franchise. Created by Ken Sugimori, Snorlax first appeared in the Game Boy video game Pokémon Red and Blue, and subsequent sequels, later appearing in various merchandise, spin-off titles, and animated and printed adaptations of the franchise. Snorlax is a large, blueish creature with closed slit eyes and a closed mouth that features two upwardly protruding teeth. ",
        category: "TopDeals",
        image: "https://tse1.mm.bing.net/th?id=OIP.EGf_sZ8GlUUpxD3VPAlJRAHaHa&pid=Api&P=0&h=220"
    },
    {
        id: 25,
        title: "Naruto Hidden Leaf Village Headband",
        price: "$17.04",
        description: "Great Eastern Entertainment Naruto Anti Leaf Village Headband The Naruto Headband (額当て，Hitai-ate) is a ninja accessory created by Masashi Kishimoto, the author of the manga shonen and the anime Naruto, and is used to indicate which village a ninja comes from and is always placed in a prominent position so that it is easy to spot where the ninja comes from, whether it is a friend or an enemy.",
        category: "TopDeals",
        image: "https://tse2.mm.bing.net/th?id=OIP.MimnwqDQfT0UH5VzWzKkWgHaHO&pid=Api&P=0&h=220"
    }
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exsist for ID" + id);
        return undefined
    }
    return productData;
}

export { productsArray, getProductData };