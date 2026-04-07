import "./Header.css";
import logo from "../../assets/logo/logo.webp";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { useCart } from "../../context/Cartcontext";
function Header() {
  const { cartCount } = useCart();
  return (
    <>
      <header>
        <nav>
          <Link to="/">
            <span className="logoimg">
              <img src={logo} />
            </span>
          </Link>

          <ul className="navlinks">
            <li>
              <Link to="/services">
                Services <FaChevronDown className="navarrow" />
              </Link>

              <ul className="dropdown">
                <li>
                  <Link to="/3CX-Phone">3CX Phone Systems</Link>
                </li>
                <li>
                  <Link to="/cloud-hosting">Cloud Phone Systems</Link>
                </li>
                <li>
                  <Link to="/domain">Sip Truncking</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/product">
                Industries <FaChevronDown className="navarrow" />
              </Link>

              <ul className="dropdown">
                <li>
                  <Link to="/ecommerce">Hospitality</Link>
                </li>
                <li>
                  <Link to="/education">Contact Centre</Link>
                </li>
                <li>
                  <Link to="/healthcare">Healthcare</Link>
                </li>
                <li>
                  <Link to="/healthcare">Retail</Link>
                </li>
                <li>
                  <Link to="/healthcare">Manufacturing</Link>
                </li>
              </ul>
            </li>

            <li className="mega-parent">
              <Link to="/shop">
                Shop <FaChevronDown className="navarrow" />
              </Link>
              <div className="mega-menu">
                <div className="mega-column">
                  <h4>Services</h4>
                  <Link to="/technical-support">Technical Support</Link>
                  <Link to="/sip-trunks">SIP Trunks</Link>
                  <Link to="/3cx-managed-cloud">3CX Managed Cloud</Link>
                  <Link to="/cloud-phone-system">Cloud Phone System</Link>
                </div>
                <div className="mega-column">
                  <h4>3CX</h4>
                  <Link to="/products/3cx-licensing">3CX Licensing</Link>

                  <h4>Connectivity & Network</h4>
                  <Link to="/gateways">Gateways & Adapters</Link>
                  <Link to="/paging">Paging & Intercoms</Link>
                  <Link to="/networking">Networking</Link>
                </div>
                <div className="mega-column">
                  <h4>VoIP Phones</h4>
                  <Link to="/desk-phones">VoIP Desk Phones</Link>
                  <Link to="/cordless">VoIP Cordless Phones</Link>
                  <Link to="/conference">Conference Phones</Link>
                  <Link to="/phone-accessories">Phone Accessories</Link>
                </div>
                <div className="mega-column">
                  <h4>Headsets</h4>
                  <Link to="/wireless-headsets">Wireless Headsets</Link>
                  <Link to="/wired-headsets">Wired Headsets</Link>
                  <Link to="/ms-teams-headsets">MS Teams Headsets</Link>
                  <Link to="/headset-accessories">Headset Accessories</Link>
                </div>
              </div>
            </li>
            <li>
              <Link to="/partners">
                Partners
                <FaChevronDown className="navarrow" />
              </Link>
              <ul className="dropdown">
                <li>
                  <Link to="/ecommerce">3CX Partner Success Program</Link>
                </li>
                <li>
                  <Link to="/education">Reseller Program</Link>
                </li>
                <li>
                  <Link to="/healthcare">Partner Registration</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/login">
                Login
                <FaChevronDown className="navarrow" />
              </Link>
              <ul className="dropdown">
                <li>
                  <Link to="/login">Shop Login</Link>
                </li>
                <li>
                  <Link to="/create-account">Create Account</Link>
                </li>
              </ul>
            </li>
          </ul>

          <div className="billingdiv">
            <p>My Billing</p>
            <select className="billinglist">
              <option>USD</option>
              <option>CAD</option>
            </select>
          </div>
          <div className="carticon">
          <Link to="/cart" className="carticon">
            <FaShoppingCart />
          </Link>
          <span className="cart-count">{cartCount}</span>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
