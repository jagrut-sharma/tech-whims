import React from "react";

import classes from "./AddressCard.module.css";

export default function AddressCard({ address }) {
  const {
    name,
    address: location,
    city,
    phoneNumber,
    pincode,
    state,
  } = address;

  return (
    <>
      <h3>{name}</h3>
      <p>
        <strong>Mobile: </strong> {phoneNumber}
      </p>
      <p>
        <strong>Address:</strong> {`${location}, ${city}, ${state}`}
      </p>
      <p>
        <strong>Pincode:</strong> {pincode}
      </p>
      <div className={classes["btn-container"]}>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </>
  );
}
