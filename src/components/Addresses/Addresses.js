import React, { useState } from "react";
import { useDataContext } from "../../context/DataContext";
import AddressCard from "./AddressCard";
import { AiFillPlusCircle } from "react-icons/ai";

import classes from "./Addresses.module.css";
import AddressForm from "./AddressForm";
import { useImmer } from "use-immer";
import { defaultFormValues } from "../../utils/contants";
import { ACTIONS } from "../../utils/actions";

export default function Addresses() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formValue, setFormValue] = useImmer(defaultFormValues);

  const {
    dataState: { addressList },
    dataDispatch,
  } = useDataContext();

  const handleDelete = (addressID) => {
    const newAddressList = addressList.filter(({ id }) => id !== addressID);
    dataDispatch({ type: ACTIONS.DELETE_ADDRESS, payload: newAddressList });
  };

  const handleFormVisibility = () => {
    setIsFormOpen(true);
    setFormValue(defaultFormValues);
  };

  return (
    <>
      <section className={classes["address-container"]}>
        {isFormOpen ? (
          <AddressForm
            setFormValues={setFormValue}
            formValues={formValue}
            setFormOpen={setIsFormOpen}
          />
        ) : (
          <h1 onClick={handleFormVisibility}>
            <AiFillPlusCircle color={"#208854"} /> Add new address
          </h1>
        )}

        <ul>
          {addressList.map((address) => (
            <li key={address.id}>
              <AddressCard
                address={address}
                onDelete={handleDelete}
                setIsFormOpen={setIsFormOpen}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
