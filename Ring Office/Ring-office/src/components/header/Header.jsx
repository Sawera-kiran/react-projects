import "./Header.css";
import logo from "../../assets/logo/logo.webp";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { useState } from "react";

function Header() {
  const { cartCount } = useCart();

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (name) => {
    setDropdownOpen(dropdownOpen === name ? null : name);
  };

  return (
    <header>
      <nav>
        {/* TOP BAR */}
        <div className="nav-top">
          <Link to="/">
            <span className="logoimg">
              <img src={logo} alt="logo" />
            </span>
          </Link>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* NAV LINKS */}
        <ul className={`navlinks ${menuOpen ? "active" : ""}`}>
          {/* SERVICES */}
          <li>
            <div
              className="nav-item"
              onClick={() => toggleDropdown("services")}
            >
            
              <Link to="/services">
                Services <FaChevronDown className="navarrow" />
              </Link>
            </div>

            <ul
              className={`dropdown ${
                dropdownOpen === "services" ? "show" : ""
              }`}
            >
              <li>
                <Link to="/3CX-Phone">3CX Phone Systems</Link>
              </li>
              <li>
                <Link to="/cloud-hosting">Cloud Phone Systems</Link>
              </li>
            </ul>
          </li>

          {/* SHOP */}
          <li>
            <Link to="/shop">Shop</Link>
          </li>

          {/* SUPPORT */}
          <li>
            <Link to="/faq">FAQ</Link>
          </li>

          {/* CONTACT */}
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          {/* BLOG */}
          <li>
            <Link to="/blog">Blog</Link>
          </li>

          {/* LOGIN */}
          <li>
            <div className="nav-item" onClick={() => toggleDropdown("login")}>
              Login <FaChevronDown />
            </div>

            <ul
              className={`dropdown ${dropdownOpen === "login" ? "show" : ""}`}
            >
              <li>
                <Link to="/login">Shop Login</Link>
              </li>
              <li>
                <Link to="/create-account">Create Account</Link>
              </li>
            </ul>
          </li>
        </ul>

        {/* RIGHT SIDE */}
        <div className="right-section">
          <div className="billingdiv">
            <p>My Billing</p>
            <select className="billinglist">
              <option>USD</option>
              <option>CAD</option>
            </select>
          </div>

          <div className="carticon">
            <Link to="/cart">
              <FaShoppingCart />
            </Link>
            <span className="cart-count">{cartCount}</span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
