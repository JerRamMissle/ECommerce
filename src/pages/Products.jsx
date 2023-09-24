import { useState } from "react"
import xbox from "../assets/xbox.jpeg"
import LOTR from "../assets/LOTR.jpeg"
import bible from "../assets/bible.jpeg"
import gigachad from "../assets/gigachad.jpeg"
import biscuits from "../assets/biscuits.jpeg"
import armor from "../assets/armor.jpeg"
import cross from "../assets/cross.jpeg"
import cookbook from "../assets/cookbook.jpeg"
import { useNavigate } from "react-router-dom";


export default function Products() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Products</h1>
      <div className="gridContainer">
        <div onClick={() => navigate("/PickUpLeftOff")}>

          <h2>Pick up where you left off</h2>
          <img src={xbox} />
          <img src={LOTR} />
        </div>
        <div onClick={() => navigate("/Explore")}>
          <h2>Explore</h2>
          <img src={bible} />
          <img src={gigachad} />
        </div>
        <div onClick={() => navigate("/JustForYou")}>
          <h2>Just for you</h2>
          <img src={biscuits} />
          <img src={armor} />
        </div>
        <div onClick={() => navigate("/TopDeals")}>
          <h2>Top Deals</h2>
          <img src={cross} />
          <img src={cookbook} />
        </div>
      </div>
    </div >
  )
}