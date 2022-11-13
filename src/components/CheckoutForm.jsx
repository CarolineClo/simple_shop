import React from "react";
import { useRef, useState } from "react";
import { insertOrder } from "../modules/db";

function CheckoutForm(props) {
  const theForm = useRef(null);
  const [paymentCompleted, setpaymentCompleted] = useState(false);
  async function submit(e) {
    e.preventDefault();
    theForm.current.elements.name.value;
    const response = await insertOrder({
      name: theForm.current.elements.name.value,
      email: theForm.current.elements.email.value,
      address: theForm.current.address.name.value,
      basket: props.cart,
    });
    if (response && response.length) {
      setpaymentCompleted(true);
    }
  }
  return (
    <>
      {paymentCompleted ? (
        <p>Thank you</p>
      ) : (
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
      )}
    </>
  );
}

//name
//email
//address

export default CheckoutForm;
