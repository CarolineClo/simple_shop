import { useState, useEffect } from "react";
import Header from "./components/Header";
import Product_list from "./components/Product_list";
import Basket from "./components/Basket";

function App() {
  const [products, setproducts] = useState([]);
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
      <Product_list products={products} />
      <Basket products={products} />
    </div>
  );
}

export default App;
