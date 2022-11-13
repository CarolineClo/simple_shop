import React from "react";
import { useRef } from "react";
import { insertOrder } from "../modules/db";

function CheckoutForm(props) {
  const theForm = useRef(null);
  function submit(e) {
    e.preventDefault();
    theForm.current.elements.name.value;
    insertOrder({
      name: theForm.current.elements.name.value,
      email: theForm.current.elements.email.value,
      address: theForm.current.address.name.value,
      basket: props.cart,
    });
  }
  return (
    <form onSubmit={submit} ref={theForm} className="form">
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
