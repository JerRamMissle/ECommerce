import { productsArray } from "../Product info";


export default function MainProducts() {
    return (
        <>
            <div>

                <main>
                    {productsArray.map((product, idx) => (
                        <><h1 key={idx}>{product.title}</h1><h2>{product.price}</h2><h2>{product.description}</h2><img className="product-photo" src={product.image} alt={product.title} /></>
                    ))}
                </main>
            </div>
        </>
    )
}