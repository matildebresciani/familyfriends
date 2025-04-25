import { useState } from "react";
import useCartStore from "./fishStore";

const products = [
    //produkter
];

const page = () => {
    const [cartItems, setCartItems] = useState([])
    function addProduct(product) {
        setCartItems((prev) => prev.concat(product))
    }
    return ( 
        <div>
            <h1>Local state</h1>
            {cartItems.map(product => (
                <article>
                    <h2>{product.name}</h2>
                    <button onClick={() => addProduct(product)}>Add to cart</button>
                </article>
            ))}
        </div>
     );
}
 
export default page;