import Product from "./Product";

function Product_list(props) {
  return (
    <main className="ProductList">
      {props.products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </main>
  );
}

export default Product_list;
