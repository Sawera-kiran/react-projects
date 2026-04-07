import "./Cart.css";
import emptycart from "../../assets/emptycart.png";
import { Link } from "react-router-dom";

function Cart({ cart, setCart }) {
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0),
    );
  };

  const totalItems = cart.reduce((acc, item) => acc + (item.qty || 0), 0);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * (item.qty || 0),
    0,
  );

  return (
    <section className="cartSection">
      <div className="cartContainer">
        {cart.length === 0 ? (
          <div className="emptyCart">
            <Link to="/product">
              <img src={emptycart} alt="Cart Empty" />
            </Link>
          </div>
        ) : (
          cart.map((item) => (
            <div className="cartItem" key={item.id}>
              <img src={item.thumbnail} alt={item.title} />

              <div className="cartContent">
                <h3>{item.title}</h3>

                <p>Price : ${item.price}</p>
              </div>

              <div className="qtyBox">
                <button
                  className="itemBtns"
                  onClick={() => decreaseQty(item.id)}
                >
                  -
                </button>

                <span>{item.qty}</span>

                <button
                  className="itemBtns"
                  onClick={() => increaseQty(item.id)}
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="orderSummary">
          <h2>Order Summary</h2>

          <hr />

          <p>Total Items : {totalItems}</p>

          <p>Discount : $0</p>

          <p>Total Price : ${totalPrice}</p>

          <button className="checkoutBtn">Checkout Now</button>
        </div>
      )}
    </section>
  );
}

export default Cart;
