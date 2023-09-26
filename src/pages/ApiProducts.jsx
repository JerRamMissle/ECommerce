
import { useState, useEffect, useRef } from "react";


export default function ApiProducts({
    products, setProducts
}) {
    //  const [products, setProducts] = useState(productsArray);
    const [filteredCategory, setFilteredCategory] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filteredPrice, setFilteredPrice] = useState(filteredCategory);
    const [term, setTerm] = useState("");
    const [category, setCategory] = useState("");
    let newCategory = useRef();
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    // console.log(category);
    // console.log(filteredCategory);
    useEffect(() => {
        setFilteredCategory(products)
        setFilteredProducts(products)
    }, []
    )
    console.log(filteredCategory)
    console.log(filteredProducts)

    function handleChange(val) {
        setTerm(val);
        console.log(val)

        if (category !== "") {
            console.log("true")
            setFilteredCategory(filteredProducts.filter((product) => {
                return (
                    product.title.toLowerCase().includes(val.toLowerCase())
                );
            }))
        } else {
            console.log("ELSE")
            setFilteredProducts(products.filter((product) => {
                return (
                    product.title.toLowerCase().includes(val.toLowerCase())
                );
            }))
        }
    }
    function changeCategory(value) {

        console.log(value)
        const newFilteredProducts = products.filter((product) => {
            return (
                product.category.includes(newCategory)
            )
            // return (
            //     product.title.toLowerCase().includes(term.toLowerCase()) &&
            //     (!category || product.category.includes(category)) &&
            //     product.price >= (minPrice || 0) &&
            //     (!maxPrice || product.price <= maxPrice)
            // );
        });
        setFilteredProducts(newFilteredProducts);
        setFilteredCategory(newFilteredProducts);

        console.log(newFilteredProducts);
    }

    function changePrice(val) {
        // console.log("CATEGORY: " + category)
        console.log(val);
        // filteredPrice.current = filteredCategory;
        if (category !== "") {

            console.log("true")



            // filteredCategory.map((product, i) => {
            //     console.log("VAL: " + val)


            //     let unsliced = filteredProducts[i].price.trim().slice(1)
            //     let currentVal = parseFloat(unsliced)


            //     console.log("after Rounding: " + currentVal);

            //     // console.log("CURRENT VAL: " + afterRounding.toFixed(2))
            //     if (val >= currentVal) {
            //         console.log(currentVal)
            //         console.log(product)
            //         filteredCategory.splice(i, 1)
            //         // filteredPrice.concat({ product })
            //     } else {

            //     }

            // })
            setFilteredCategory(filteredCategory.filter((word, i, arr) => {
                let unsliced = filteredProducts[i].price.trim().slice(1)
                let currentVal = parseFloat(unsliced)
                // arr.pop()
                return val <= currentVal;
            }))



            console.log("NEXT\n\n")
            // console.log("NEW LIST")
            // console.log(filteredPrice)
            console.log(filteredCategory)


            // setFilteredCategory(filteredProducts.filter((product, i) => {
            //     let unsliced = filteredProducts[i].price.trim().slice(1)
            //     let currentVal = parseFloat(unsliced)
            //     console.log("CURRENT VAL: " + currentVal)
            //     if (val >= currentVal) {
            //         console.log(product);
            //         return (
            //             product
            //         );
            //     }
            // }))
        } else {
            console.log("ELSE")
            let newList = []
            products.map((product, i) => {
                let unsliced = filteredProducts[i].price.trim().slice(1)
                let currentVal = parseFloat(unsliced)
                console.log("CURRENT VAL: " + currentVal)
                if (val >= currentVal) {
                    console.log(product);
                    newList.concat(product);
                }

            })
            setFilteredProducts(newList)
            // setFilteredProducts(products.filter((product) => {
            //     return (
            //         product.title.toLowerCase().includes(val.toLowerCase())
            //     );
            // }))
        }
        // const newFilteredProducts = product.filter((product) => {
        //     return product.price >= (minPrice || 0) &&
        //         (!maxPrice || product.price <= maxPrice);
        // });
        // setFilteredProducts(newFilteredProducts);
        // setFilteredCategory(newFilteredProducts);
        // setFilteredPrice(newFilteredProducts);
        // console.log(newFilteredProducts);
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
                            handleChange(e.target.value);
                        }}
                    />
                    <select
                        value={category}
                        onChange={(e) => {
                            newCategory = e.target.value;
                            setCategory(newCategory)
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
                            changePrice(e.target.value)
                        }}
                    />
                    <input
                        type="number"
                        placeholder="Maximum Price"
                        value={maxPrice}
                        onChange={(e) => {
                            setMaxPrice(e.target.value);
                        }}
                    />
                </div>
                <div>
                    {
                        category !== "" ?
                            <>
                                {
                                    filteredCategory.map((product, idx) => (
                                        <div key={idx} className="Grid2Container">
                                            <h1 key={idx}>{product.title} <img className="product-photo" src={product.image} alt={product.title} /></h1>
                                            <h2> {product.description}</h2>
                                            <h2>{product.price}</h2>
                                        </div>
                                    ))
                                }
                            </> :
                            <>
                                {
                                    filteredProducts.length ?
                                        filteredProducts.map((product, idx) => (
                                            <div key={idx} className="Grid2Container">
                                                <h1 key={idx}>{product.title} <img className="product-photo" src={product.image} alt={product.title} /></h1>
                                                <h2> {product.description}</h2>
                                                <h2>{product.price}</h2>
                                            </div>
                                        )) :

                                        products.map((product, idx) => (
                                            <div key={idx} className="Grid2Container">
                                                <h1 key={idx}>{product.title} <img className="product-photo" src={product.image} alt={product.title} /></h1>
                                                <h2> {product.description}</h2>
                                                <h2>{product.price}</h2>
                                            </div>
                                        ))
                                }
                            </>
                    }



                </div>
            </div>
        </>
    )
}


