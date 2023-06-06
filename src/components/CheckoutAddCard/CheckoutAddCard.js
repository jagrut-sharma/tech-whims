import React from "react";

import classes from "./CheckoutCard.module.css";

export default function CheckoutAddCard({
  address,
  setSelectedAdd,
  selectedAdd,
}) {
  const {
    name,
    address: location,
    city,
    phoneNumber,
    pincode,
    state,
    id,
  } = address;

  return (
    <div
      className={`${classes["addrs-card-container"]} ${
        selectedAdd?.id === id && classes["active-addrs-container"]
      }`}
    >
      <input
        type="radio"
        name="address"
        value={location}
        id={id}
        onChange={() => setSelectedAdd(address)}
      />
      <label htmlFor={id}>
        <h3>{name}</h3>
        <p>
          <strong>Mobile: </strong> {phoneNumber}
        </p>
        <p>
          <strong>Address:</strong>{" "}
          {`${location}, ${city}, ${state}, ${pincode}`}
        </p>
      </label>
    </div>
  );
}
