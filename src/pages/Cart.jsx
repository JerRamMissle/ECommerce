import { useState } from "react"
import { useNavigate } from "react-router-dom";
import trashIcon2 from "../assets/trashIcon2.jpeg"

export default function Cart({ allProducts, updateCart }) {
  let total = 0
  const [checkout, setCheckout] = useState(false)
  const [cart, setCart] = useState(allProducts);
  const discount = .2
  let deals = 0

  function togCheckout() {

    setCheckout(!checkout)
  }
  function removeCart(e, i) {
    if (cart.length === 1) {
      setCart([])
      updateCart([])
    } else {
      setCart(cart.splice(i, 1))
      updateCart(cart)
    }

  }
  return (
    <>
      {checkout === false ?
        <div>
          <h1 >Cart</h1>

          {cart?.length >= 1 ?
            cart.map((product, i) => {
              let unsliced = cart[i].price.trim().slice(1)


              let currentVal = parseFloat(unsliced)
              if (cart[i]?.page) {
                // console.log("val: " + currentVal)

                let beforeRounding = currentVal * discount;
                // console.log("beforeRounding: " + beforeRounding)
                let afterRounding =
                  Math.round((beforeRounding + Number.EPSILON) * 100) / 100;
                deals += currentVal - afterRounding;
                // console.log("afterRounding: " + afterRounding)
              } else {
                total += currentVal
              }

              return (
                <div className="Grid2Container" key={cart[i].image + i}>
                  <img className="cartImg" src={cart[i].image}></img>

                  <p>{cart[i].description}</p>
                  <div>
                    <img src={trashIcon2} onClick={(e) => removeCart(i)} />

                    <h3>Price: {cart[i].price}</h3>
                  </div>


                </div >)



            })
            : null
          }

          <h3> Total Price = ${total + deals}</h3>
        </div >
        :
        <h2>Thank you Come Again!</h2>
      }

      <button className="button" onClick={togCheckout}>Checkout</button>

    </>
  )

}
