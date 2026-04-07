import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Shop.css";
import { slugify } from "../../utils/slugify";
import { useCart } from "../../context/CartContext";

function Shop({ cart, setCart }) {

  const [products, setProducts] = useState([]);
const { addToCart } = useCart();
  useEffect(() => {

    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {

        const productsWithSlugs = data.products.map(product => ({
          ...product,
          slug: slugify(product.title)
        }));

        setProducts(productsWithSlugs);

      });

  }, []);

  function updateCart(params) {
    
  }
  return (

    <section className="shop-page">

      <h1 className="shop-title">Shop</h1>

      <div className="products-grid">

        {products.map(product => (

          <div key={product.id} className="product-card">

            <Link to={`/product/${product.slug}`}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="product-image"
              />
            </Link>

            <div className="product-content">

              <h2 className="product-title">
                {product.title}
              </h2>

              <p className="product-description">
                {product.description}
              </p>

              <h3 className="product-price">
                ${product.price}
              </h3>

              <button
                className="shopButton"
                onClick={() => addToCart(product)}
              >
                Add to cart
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Shop;