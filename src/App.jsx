import { Routes, Route, useNavigate, BrowserRouter } from "react-router-dom"
import Products from "./pages/Products";
import UserName from "../Components/UserName";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import "./App.css"
import PickUpLeftOff from "./pages/PickUpLeftOff";
import Explore from "./pages/Explore";
import JustForYou from "./pages/JustForYou";
import TopDeals from "./pages/TopDeals";
import MainProducts from "./pages/MainProducts";
import ApiProducts from "./pages/ApiProducts";
import { useState, useEffect } from "react";
// import NavBar from "../Components/NarBar";
// import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([])
  const navigate = useNavigate();

  function navigateTo(route) {
    navigate(route)
  }
  function navigateToCart() {
    navigate("cart", cart)
  }
  function addToCart(xbox) {
    let temp = cart.concat(xbox)

    setCart(temp)
    console.log(temp)

  }
  function handleSubmit(e) {
    e.preventDefault();
    const newFilteredProducts = filteredProducts.filter((product) => {
      return (
        product.title.toLowerCase().includes(term.toLowerCase()) &&
        (!category || product.category.includes(category)) &&
        product.price >= (minPrice || 0) &&
        (!maxPrice || product.price <= maxPrice)
      );
    });
    setFilteredProducts(newFilteredProducts);
  }
  return (
    <div>



      <div className="HeaderContainer">
        <div className="UserName">
          <UserName />
        </div>
        <div onClick={() => navigateTo("/Login")}>
          <h2>Login</h2>

        </div>
        <div onClick={() => navigateTo("/Products")}>
          <h2>Home</h2>
        </div>
        <div onClick={() => navigateTo("/PickUpLeftOff")}>
          <h2>Pick up where you left off</h2>
        </div>
        <div onClick={() => navigateTo("/Explore")}>
          <h2>Explore</h2>
        </div>
        <div onClick={() => navigateTo("/JustForYou")}>
          <h2>Just For you</h2>
        </div>
        <div onClick={() => navigateTo("/TopDeals")}>
          <h2>Top Deals</h2>
        </div>
        <div onClick={() => navigateTo("/MainProducts")}>
          <h2>Main Products</h2>
        </div>
        <div onClick={() => navigateTo("/ApiProducts")}>
          <h2>API Products</h2>
        </div>
      </div>
      <button className="button" onClick={() => navigateToCart("cart")}> Cart:{cart.length} </button>
      <br />
      {/* 
      <NavBar /> */}
      <Routes>
        <Route path="products" element={<Products />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/MainProducts" element={<MainProducts updateCart={addToCart} allProducts={cart} />} />
        <Route path="cart" element={<Cart allProducts={cart} updateCart={setCart} />} />
        <Route path="PickUpLeftOff" element={<PickUpLeftOff updateCart={addToCart} />} />
        <Route path="Explore" element={<Explore updateCart={addToCart} />} />
        <Route path="JustForYou" element={<JustForYou updateCart={addToCart} />} />
        <Route path="TopDeals" element={<TopDeals updateCart={addToCart} />} />
        <Route path="/ApiProducts" element={<ApiProducts updateCart={addToCart} products={products} setProducts={setProducts} />} />
      </Routes>
    </div >
  )
}

export default App
