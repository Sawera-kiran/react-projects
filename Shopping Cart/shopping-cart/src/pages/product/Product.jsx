import "./Product.css";
import { useState, useEffect } from "react";

function Product({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/carts")
      .then((response) => response.json())
      .then((data) => {
        const allProducts = data.carts.flatMap((cart) => cart.products);
        setProducts(allProducts.slice(0,20));
      })
      .catch((error) => console.log("Error:", error));
  }, []);

  return (
    <section className="productSection">
      <div className="productContainer">
        {products.map((item) => (
          <div className="product" key={item.id}>
            <div className="productimg">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="productImg"
              />
            </div>

            <div className="contentContainer">
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <p>Qty:{item.quantity}</p>
              <button className="cartButton" onClick={() => addToCart(item)}>
                Add to cart{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Product;
