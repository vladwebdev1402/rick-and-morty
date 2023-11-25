import React from "react";
import st from "./Header.module.scss";
import logo from "@/assets/images/logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={st.header}>
      <nav className={`container ${st.header__container}`}>
        <a href={"#"}>
          <img src={logo} alt="" />
        </a>
        <ul className={st.header__links}>
          <li className={st.header__linkitem}>
            <a href={"#"}>Characters</a>
          </li>
          <li className={st.header__linkitem}>
            <a href={"#"}>Locations</a>
          </li>
          <li className={st.header__linkitem}>
            <a href={"#"}>Episodes</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
