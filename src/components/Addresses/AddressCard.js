import React, { useState } from "react";

import classes from "./AddressCard.module.css";
import AddressForm from "./AddressForm";
import { useImmer } from "use-immer";

export default function AddressCard({ address, onDelete, setIsFormOpen }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useImmer(address);

  const {
    name,
    address: location,
    city,
    phoneNumber,
    pincode,
    state,
    id,
  } = address;

  const handleEdit = () => {
    setFormData((draft) => address);
    setIsEditing(true);
    setIsFormOpen(false);
  };

  return (
    <>
      {isEditing ? (
        <AddressForm
          setFormValues={setFormData}
          formValues={formData}
          setFormOpen={setIsEditing}
          editingAddress
        />
      ) : (
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
            <button onClick={handleEdit}>Edit</button>
            <button onClick={() => onDelete(id)}>Delete</button>
          </div>
        </>
      )}
    </>
  );
}
