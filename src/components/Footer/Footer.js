import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={classes.footer}>
        <BsGithub size={"1.5rem"} color="#42944c" className={classes.logo} />
        <FaTwitter size={"1.5rem"} color="#42944c" className={classes.logo} />
        <BsLinkedin size={"1.5rem"} color="#42944c" className={classes.logo} />
      </footer>
    </>
  );
}
