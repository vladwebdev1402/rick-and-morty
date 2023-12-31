import React, { FC, useEffect } from "react";
import st from "./Header.module.scss";
import { Link } from "react-router-dom";
import { paths } from "@/routePaths/paths";
interface Props {
  active: boolean;
}
const BurgerBody: FC<Props> = ({ active }) => {
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];

    if (active) body.className += " lock__scroll";
    else body.className = body.className.replace(" lock__scroll", "");
  }, [active]);

  return (
    <div className={`${active ? st.burger__active : ""} ${st.burger__body}`}>
      <ul className={st.header__links_burger}>
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
    </div>
  );
};

export default BurgerBody;
