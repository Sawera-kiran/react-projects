import "./Cart.css";
import { useCart } from "../../context/CartContext";

function Cart() {
  const { cart, setCart } = useCart();

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalItems = cart.reduce(
    (acc, item) => acc + (item.quantity || 0),
    0
  );

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity || 0),
    0
  );

  return (
    <section className="cartSection">
      <div className="cartContainer">
        {cart.length === 0 ? (
          <div className="emptyCart">
            <h2>Your cart is empty</h2>
          </div>
        ) : (
          cart.map((item) => (
            <div className="cartItem" key={item.id}>
              <img src={item.thumbnail} alt={item.title} />

              <div className="cartContent">
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
              </div>

              <div className="qtyBox">
                <button
                  className="itemBtns"
                  onClick={() => decreaseQty(item.id)}
                >
                  -
                </button>

                <span>{item.quantity}</span>

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

          <p>Total Items: {totalItems}</p>
          <p>Total Price: ${totalPrice}</p>

          <button className="checkoutBtn">Checkout</button>
        </div>
      )}
    </section>
  );
}

export default Cart;

