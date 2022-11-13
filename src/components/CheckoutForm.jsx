import React from "react";

function CheckoutForm() {
  return (
    <form className="form">
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
