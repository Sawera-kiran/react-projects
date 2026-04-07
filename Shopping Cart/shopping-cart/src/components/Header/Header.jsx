import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>
        <Link to="/" className="logoLink">
          Cart
          <small>
            <span id="logo">Now</span>
          </small>
        </Link>
      </h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
}

export default Header;
