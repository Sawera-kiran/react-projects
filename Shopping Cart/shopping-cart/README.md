Shopping Cart App (React + Vite)

This project is a React-powered shopping cart demonstrating dynamic product interactions, state management, and a live cart summary.



🌐 Live Demo

Check it out live here: shopping-cart-sawera.netlify.app




🌟 Features

Hero Image Navigation: Clicking the hero image leads to the product list.

Product Catalog: A list of all products fetched from the DummyJSON API.

Add to Cart: Each product has an “Add to Cart” button, adding it to the cart section in the nav bar.

Quantity Controls: Each cart item can increment (plus) or decrement (minus) its quantity.

Dynamic Cart Summary: The cart updates live with total item count and total cost.

Checkout Button: A checkout button reflects the total but is not linked to any backend yet.

Empty Cart State: When the cart is empty, a message (image) appears. Clicking it returns you to the product list.

🧠 How It Works

The hero image leads to the product page.

Products are fetched from DummyJSON.

Adding products updates the cart count and total.

Checkout shows totals but has no backend action.

Empty cart prompts users to return to products.

🛠 Tech Stack

React (with Vite for build tooling)

JavaScript (for functionality)

CSS (for styling)

📦 API

Product data is fetched from DummyJSON Carts API
.

⚙️ Run Locally

git clone https://github.com/Sawera-kiran/react-projects/tree/main/Shopping%20Cart/shopping-cart

cd Shopping Cart/shopping-cart

npm install

npm run dev


