// import { Link } from "react-router-dom";
// import "./ProductCard.css";
// function ProductCard({ product }) {
//   return (
//     <div className="product-card">
//       <img src={product.image} alt={product.name} />

//       <h3>{product.name}</h3>

//       <p>{product.price}</p>


//       <Link className="product-link" to={`/products/${product.slug}`}>
//         View Details
//       </Link>
//     </div>
//   );
// }

// export default ProductCard;


import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {

  return (

    <div className="product-card">

      <img
        src={product.thumbnail}
        alt={product.title}
      />

      <h3>{product.title}</h3>

      <p>${product.price}</p>

      <Link
        className="product-link"
        to={`/products/${product.slug}`}
      >
        View Details
      </Link>

    </div>

  );

}

export default ProductCard;