import React from "react";
import st from "./Characters.module.scss";
import text from "@/assets/images/rick-and-morty-txt.svg";
import { CharacterList } from "@/modules/CharacterList";
import { CharacterFilters } from "@/modules/CharacterFilters";
const Characters = () => {
  return (
    <>
      <div className={st.logo}>
        <img src={text} alt="" />
      </div>
      <CharacterFilters />
      <CharacterList />
    </>
  );
};

export default Characters;
