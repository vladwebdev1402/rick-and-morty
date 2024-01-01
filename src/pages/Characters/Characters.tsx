import React, { useState } from "react";
import st from "./Characters.module.scss";
import text from "@/assets/images/rick-and-morty-txt.svg";
import { CharacterList } from "@/modules/CharacterList";
import { CharacterFilters } from "@/modules/CharacterFilters";
import { ICharacterFilters } from "@/types/ICharacterFilters";
const Characters = () => {
  const [filters, setFilters] = useState<ICharacterFilters>({
    search: "",
    species: "",
    gender: "",
    status: "",
  });

  return (
    <>
      <div className={st.logo}>
        <img src={text} alt="" />
      </div>
      <CharacterFilters filters={filters} setFilters={setFilters} />
      <CharacterList />
    </>
  );
};

export default Characters;
