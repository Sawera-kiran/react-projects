import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { slugify } from "../../../utils/slugify";
import "./ProductDetails.css";
import { useCart } from "../../../context/CartContext";
function ProductDetails() {

  const { addToCart } = useCart();
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.products.find(
          (p) => slugify(p.title) === slug,
        );

        setProduct(foundProduct);
      });
  }, [slug]);

  if (product === null) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <section className="product-page">
      <div className="product-container">
        <div className="product-info">
          <h1>{product.title}</h1>

          <p className="product-description">{product.description}</p>

          <h3 className="product-price">${product.price}</h3>
          <button className="shopButton" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>

        <div className="product-image">
          <img src={product.thumbnail} alt={product.title} />
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
