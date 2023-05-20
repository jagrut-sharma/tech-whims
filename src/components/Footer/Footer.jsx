import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={classes.footer}>
        <a
          href="https://github.com/jagrut-sharma"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub size={"1.5rem"} color="#42944c" className={classes.logo} />
        </a>
        <a
          href="https://twitter.com/Jagrut_Sharma"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter size={"1.5rem"} color="#42944c" className={classes.logo} />
        </a>
        <a
          href="https://www.linkedin.com/in/jagrut-sharma/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin
            size={"1.5rem"}
            color="#42944c"
            className={classes.logo}
          />
        </a>
      </footer>
    </>
  );
}
