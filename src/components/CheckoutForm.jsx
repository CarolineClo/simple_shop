import React from "react";
import { insertOrder } from "../modules/db";

function CheckoutForm() {
  function submit(e) {
    e.preventDefault();
    insertOrder({
      name: "Caroline",
      email: "caroline@caroline",
      address: "22 the someting",
      basket: [
        {
          price: 2,
        },
        { price: 3 },
      ],
    });
  }
  return (
    <form onSubmit={submit} className="form">
      <div className="form-control">
        <label htmlFor="form-name">Name</label>
        <input required type="text" name="name" id="form-name" />
      </div>
      <div className="form-control">
        <label htmlFor="form-email">E-mail</label>
        <input required type="email" name="email" id="form-email" />
      </div>{" "}
      <div className="form-control">
        <label htmlFor="form-address">Address</label>
        <textarea name="address" id="form-address" />
      </div>
      <button>Pay</button>
    </form>
  );
}

//name
//email
//address

export default CheckoutForm;
