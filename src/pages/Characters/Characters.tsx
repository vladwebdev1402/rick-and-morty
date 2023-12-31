import React from "react";
import st from "./Characters.module.scss";
import text from "@/assets/images/rick-and-morty-txt.svg";
const Characters = () => {
  return (
    <>
      <div className={st.logo}>
        <img src={text} alt="" />
      </div>
    </>
  );
};

export default Characters;
