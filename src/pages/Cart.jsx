import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Cart({ updateCart }) {
  let total = 0
  const [checkout, setCheckout] = useState(false)
  const discount = .2
  let deals = 0
  function togCheckout() {
    setCheckout(!checkout)
  }
  return (
    <>
      {checkout === false ?
        <div>
          <h1 >Cart</h1>
          {updateCart?.map((e, i) => {
            let unsliced = updateCart[i].price.trim().slice(1)
            let currentVal = parseFloat(unsliced)
            if (updateCart[i]?.page) {
              console.log("val: " + currentVal)

              let beforeRounding = currentVal * discount;
              console.log("beforeRounding: " + beforeRounding)
              let afterRounding =
                Math.round((beforeRounding + Number.EPSILON) * 100) / 100;
              deals += currentVal - afterRounding;
              console.log("afterRounding: " + afterRounding)
            } else {
              total += currentVal
            }

            return (
              <div className="Grid2Container" key={updateCart[i].image + i}>
                <img className="cartImg" src={updateCart[i].image}></img>

                <p>{updateCart[i].description}</p><h3>Price: {updateCart[i].price}</h3>


              </div>)



          })}

          <h3> Total Price = ${total + deals}</h3>
        </div>
        :
        <h2>Thank you Come Again!</h2>
      }

      <button className="button" onClick={togCheckout}>Checkout</button>

    </>
  )

}