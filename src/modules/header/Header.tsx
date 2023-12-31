import React, { useState } from "react";
import st from "./Header.module.scss";
import logo from "@/assets/images/logo.svg";
import { Link } from "react-router-dom";
import { paths } from "@/routePaths/paths";
import BurgerButton from "@/ui/BurgerButton/BurgerButton";
import BurgerBody from "./BurgerBody";
const Header = () => {
  const [burger, setBurger] = useState(false);

  return (
    <header className={st.header}>
      <nav className={`container ${st.header__container}`}>
        <Link to={paths.main}>
          <img src={logo} alt="" />
        </Link>
        <ul className={st.header__links}>
          <li className={st.header__linkitem}>
            <Link to={paths.main}>Characters</Link>
          </li>
          <li className={st.header__linkitem}>
            <Link to={"#"}>Locations</Link>
          </li>
          <li className={st.header__linkitem}>
            <Link to={"#"}>Episodes</Link>
          </li>
        </ul>
        <BurgerButton
          className={st.header__burger}
          active={burger}
          onClick={() => setBurger(!burger)}
        />
      </nav>

      <BurgerBody active={burger} />
    </header>
  );
};

export default Header;
