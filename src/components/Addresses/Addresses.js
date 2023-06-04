import React from "react";
import { useDataContext } from "../../context/DataContext";
import AddressCard from "./AddressCard";
import { AiFillPlusCircle } from "react-icons/ai";

import classes from "./Addresses.module.css";

export default function Addresses() {
  const {
    dataState: { addressList },
  } = useDataContext();

  // const handleDelete = () => {};

  // const handleEdit = () => {};

  return (
    <>
      <section className={classes["address-container"]}>
        <h1>
          <AiFillPlusCircle color={"#208854"} /> Add new address
        </h1>
        <ul>
          {addressList.map((address) => (
            <li>
              <AddressCard address={address} key={address.id} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
