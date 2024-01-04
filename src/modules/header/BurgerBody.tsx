import React, { FC, useEffect } from "react";
import st from "./Header.module.scss";
import { Link } from "react-router-dom";
import { paths } from "@/routePaths/paths";
interface Props {
  active: boolean;
  close: () => void;
}
const BurgerBody: FC<Props> = ({ active, close }) => {
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];

    if (active) body.className += " lock__scroll";
    else body.className = body.className.replace(" lock__scroll", "");
  }, [active]);

  return (
    <div className={`${active ? st.burger__active : ""} ${st.burger__body}`}>
      <ul className={st.header__links_burger}>
        <li className={st.header__linkitem}>
          <Link to={paths.main} onClick={close}>
            Characters
          </Link>
        </li>
        <li className={st.header__linkitem}>
          <Link to={paths.locations} onClick={close}>
            Locations
          </Link>
        </li>
        <li className={st.header__linkitem}>
          <Link to={paths.episodes} onClick={close}>
            Episodes
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BurgerBody;
