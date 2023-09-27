import { productsArray } from "../Product info";
import { useState, useEffect } from "react";

export default function MainProducts({ updateCart }) {
    const [products, setProducts] = useState(productsArray);
    const [filteredCategory, setFilteredCategory] = useState(productsArray);
    const [titleArr, setTitleArr] = useState(productsArray);
    const [filteredList, setFilteredList] = useState(filteredCategory);
    const [term, setTerm] = useState("");
    const [category, setCategory] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    function termChange(val) {
        setTerm(val);
        if (category !== "") {
            setFilteredCategory(
                titleArr.filter((product) => {
                    return product.title.toLowerCase().includes(val.toLowerCase());
                })
            );
            setFilteredList(
                titleArr.filter((product) => {
                    return product.title.toLowerCase().includes(val.toLowerCase());
                })
            );
        } else {
            setTitleArr(
                products.filter((product) => {
                    return product.title.toLowerCase().includes(val.toLowerCase());
                })
            );
            setFilteredList(
                products.filter((product) => {
                    return product.title.toLowerCase().includes(val.toLowerCase());
                })
            );
        }
    }
    function changeCategory(value) {
        const newFilteredProducts = products.filter((product) => {
            return product.category.includes(value);
        });
        setTitleArr(newFilteredProducts);
        setFilteredCategory(newFilteredProducts);
        setFilteredList(newFilteredProducts);
    }

    function changeMinPrice(val) {
        if (category !== "") {
            setFilteredList(
                filteredCategory.filter((product, i, arr) => {
                    let formatted = titleArr[i].price.trim().slice(1);
                    let currentVal = parseFloat(formatted);
                    return val <= currentVal;
                })
            );
        } else {
            //   console.log(filteredCategory);
            setFilteredList(
                products.filter((product, i, arr) => {
                    let formatted = products[i].price.trim().slice(1);
                    let currentVal = parseFloat(formatted);
                    return val <= currentVal;
                })
            );
        }
    }
    function changeMaxPrice(val) {
        if (val === "") {
            setFilteredList(filteredCategory);
        } else if (category !== "") {
            setFilteredList(
                filteredCategory.filter((product, i, arr) => {
                    let formatted = titleArr[i].price.trim().slice(1);
                    let currentVal = parseFloat(formatted);
                    return val >= currentVal;
                })
            );
            //   console.log(filteredList);
        } else {
            setFilteredList(
                products.filter((product, i, arr) => {
                    let formatted = products[i].price.trim().slice(1);
                    let currentVal = parseFloat(formatted);
                    return val >= currentVal;
                })
            );
            //   console.log(filteredList);
        }
    }

    const categories = [...new Set(products.map((product) => product.category))];
    return (
        <>
            <div>
                <div>
                    <h3>Filter Products</h3>
                    <input
                        className="search-bar"
                        type="text"
                        placeholder="Search Products"
                        value={term}
                        id="term search"
                        onChange={(e) => {
                            termChange(e.target.value);
                        }}
                    />
                    <select
                        value={category}
                        onChange={(e) => {
                            setCategory(e.target.value);
                            changeCategory(e.target.value);
                        }}
                    >
                        <option value="">All Categories</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                    <input
                        type="number"
                        placeholder="Minimum Price"
                        value={minPrice}
                        onChange={(e) => {
                            setMinPrice(e.target.value);
                            changeMinPrice(e.target.value);
                        }}
                    />
                    <input
                        type="number"
                        placeholder="Maximum Price"
                        value={maxPrice}
                        onChange={(e) => {
                            setMaxPrice(e.target.value);
                            changeMaxPrice(e.target.value);
                        }}
                    />
                </div>
                <div>
                    {filteredList.map((product, i) => (
                        <div
                            key={productsArray[i].title + " " + i}
                            className="Grid2Container"
                        >
                            <h1 key={i}>
                                {product.title}{" "}
                                <img
                                    className="product-photo"
                                    src={product.image}
                                    alt={product.title}
                                />
                            </h1>
                            <h2> {product.description}</h2>
                            <h2>{product.price}</h2>
                            <button onClick={(e) => updateCart(productsArray[i])}
                                className="button">Add to cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
