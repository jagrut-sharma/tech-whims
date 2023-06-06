import React from "react";
import { v4 as uuid } from "uuid";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optiona

import classes from "./AddressForm.module.css";
import { useDataContext } from "../../context/DataContext";
import { ACTIONS } from "../../utils/actions";
import { defaultFormValues } from "../../utils/contants";

export default function AddressForm({
  formValues,
  setFormValues,
  setFormOpen,
  editingAddress,
}) {
  const {
    dataDispatch,
    dataState: { addressList },
  } = useDataContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    dataDispatch({
      type: ACTIONS.ADD_ADDRESS,
      payload: { ...formValues, id: uuid() },
    });
    setFormValues(defaultFormValues);
    setFormOpen(false);
  };

  const handleCancel = () => {
    setFormOpen(false);
    setFormValues(defaultFormValues);
  };

  const handleChange = (e) => {
    setFormValues((draft) => {
      draft[e.target.name] = e.target.value;
    });
  };

  const handleSave = (addressID) => {
    const newAddressList = addressList.map((add) =>
      add.id === addressID ? { ...formValues } : add
    );

    dataDispatch({
      type: ACTIONS.EDIT_ADDRESS,
      payload: newAddressList,
    });
    setFormValues(defaultFormValues);
    setFormOpen(false);
  };

  return (
    <>
      <form className={classes["form-container"]} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Address"
          name="address"
          value={formValues.address}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="City"
          name="city"
          value={formValues.city}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="State"
          name="state"
          value={formValues.state}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="pincode"
          name="pincode"
          value={formValues.pincode}
          onChange={handleChange}
          required
        />
        <Tippy content="Enter 10 digits" placement="left">
          <input
            type="tel"
            placeholder="Phone number: 10 digits"
            pattern="[0-9]{10}"
            name="phoneNumber"
            value={formValues.phoneNumber}
            onChange={handleChange}
            required
          />
        </Tippy>
        <div className={classes["btn-container"]}>
          {editingAddress ? (
            <button type="button" onClick={() => handleSave(formValues.id)}>
              Save
            </button>
          ) : (
            <button>Add</button>
          )}
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}
