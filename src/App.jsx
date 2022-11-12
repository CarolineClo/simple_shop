import { useState, useEffect } from "react";
import Header from "./components/Header";
import Product_list from "./components/Product_list";
import Basket from "./components/Basket";

function App() {
  const [products, setproducts] = useState([]);
  const [cart, setcart] = useState([]);
  function addToCart(data) {
    if (cart.find((entry) => entry.id === data.id)) {
      setcart((oldCart) =>
        oldCart.map((entry) => {
          if (entry.id !== data.id) {
            return entry;
          }
          const copy = { ...entry };
          copy.amount = copy.amount + 1;
          return copy;
        })
      );
    } else setcart((oldCart) => oldCart.concat({ ...data, amount: 1 }));
  }
  useEffect(() => {
    async function getData() {
      const res = await fetch("https://kea-alt-del.dk/t7/api/products");
      const data = await res.json();
      setproducts(data);
    }
    getData();
  }, []);
  return (
    <div className="App">
      <Header />
      <Product_list products={products} addToCart={addToCart} />
      <Basket products={products} cart={cart} />
    </div>
  );
}

export default App;
