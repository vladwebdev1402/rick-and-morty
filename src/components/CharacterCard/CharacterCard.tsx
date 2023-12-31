import React, { FC } from "react";
import { ICharacter } from "../type";
import st from "./CharacterCard.module.scss";
interface Props {
  character: ICharacter;
}

const CharacterCard: FC<Props> = ({ character }) => {
  return (
    <div className={st.card}>
      <div className={st.card__image}>
        <img src={character.image} alt="" />
      </div>
      <div className={st.card__body}>
        <div className={st.card__name}>{character.name}</div>
        <div className={st.card__species}>{character.species}</div>
      </div>
    </div>
  );
};

export default CharacterCard;
