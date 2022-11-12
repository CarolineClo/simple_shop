import React from "react";

function Basket(props) {
  return (
    <section className="Basket">
      <ul>
        {props.cart.map((item) => (
          <li>
            {item.productdisplayname} x {item.amount}, {item.amount * item.price}
          </li>
        ))}
        {/* <li>Some Product x 3, 1234,-</li> */}
      </ul>
      <button>Buy now</button>
    </section>
  );
}

export default Basket;
