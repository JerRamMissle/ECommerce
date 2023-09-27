
import { useState, useEffect } from "react";


export default function ApiProducts({
    updateCart
}) {
    const [term, setTerm] = useState("");
    const [category, setCategory] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [products, setProducts] = useState([]);



    const [titleArr, setTitleArr] = useState([]);
    const [filteredCategory, setFilteredCategory] = useState([]);
    const [filteredList, setFilteredList] = useState([]);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

                const result = await response.json()
                let newResult = []
                result.map((r, i) => {
                    let newObj = r
                    let newPrice = r.price.toString();
                    newObj.price = "$" + newPrice
                    newResult.push(newObj)
                })

                setProducts(newResult)
                setFilteredList(newResult)
                setTitleArr(newResult)
                setFilteredCategory(newResult)
                console.log(result)
                console.log("NEW RESULT: ")
                console.log(newResult)

            } catch (error) {
                console.error(error)
            }
        }
        fetchProducts()
    }, []
    )

    // console.log(category);
    // console.log(filteredCategory);
    useEffect(() => {
        console.log("FILTERED LIST: ")
        console.log(filteredList)
        // setFilteredCategory(products)
        // setFilteredProducts(products)
    }, [filteredList])


    function termChange(val) {
        console.log(val)
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
                    <input className="search-bar"
                        type="text"
                        placeholder="Search Products"
                        value={term}
                        onChange={(e) => {
                            termChange(e.target.value);
                        }}
                    />
                    <select
                        value={category}
                        onChange={(e) => {
                            setCategory(e.target.value)
                            changeCategory(e.target.value)

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
                            changeMinPrice(e.target.value)
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
                    {
                        filteredList.map((product, idx) => (
                            <div key={idx} className="Grid2Container">
                                <h1 key={idx}>{product.title} <img className="product-photo" src={product.image} alt={product.title} /></h1>
                                <h2> {product.description}</h2>
                                <h2>{product.price}</h2>
                                <button onClick={(e) => updateCart(filteredList[idx])}
                                    className="button">Add to cart</button>
                            </div>
                        ))
                    }





                </div>
            </div>
        </>
    )
}


