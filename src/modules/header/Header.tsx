import React from "react";
import st from "./Header.module.scss";
import logo from "@/assets/images/logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={st.header}>
      <nav className={`container ${st.header__container}`}>
        <Link to={"#"}>
          <img src={logo} alt="" />
        </Link>
        <ul className={st.header__links}>
          <li className={st.header__linkitem}>
            <Link to={"#"}>Characters</Link>
          </li>
          <li className={st.header__linkitem}>
            <Link to={"#"}>Locations</Link>
          </li>
          <li className={st.header__linkitem}>
            <Link to={"#"}>Episodes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
