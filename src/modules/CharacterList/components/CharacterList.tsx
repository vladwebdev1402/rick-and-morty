import React from "react";
import st from "./CharacterList.module.scss";
import { CharacterData } from "../data";
import CharacterCard from "@/components/CharacterCard/CharacterCard";
const CharacterList = () => {
  return (
    <div className={`container ${st.list}`}>
      {CharacterData.map((character, idx) => (
        <CharacterCard character={character} key={idx} />
      ))}
    </div>
  );
};

export default CharacterList;
